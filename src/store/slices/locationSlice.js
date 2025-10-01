import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { env } from "../../utils/envVariables";

const { countryApiKey } = env;

// Async thunk for fetching cities by country and state
export const getCitiesByCountryAndState = createAsyncThunk(
  "location/getCitiesByCountryAndState",
  async ({ countryCode, stateCode }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.countrystatecity.in/v1/countries/${countryCode}/states/${stateCode}/cities`,
        {
          headers: {
            "X-CSCAPI-KEY": "Q2N6OVIwUEtldnM0aExoV0txMzJGdWFzbVJCVkFhQTFFT1pLSkl3Rg==",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch cities");
      }

      const cities = await response.json();
      return cities;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const locationSlice = createSlice({
  name: "location",
  initialState: {
    cities: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearCities: (state) => {
      state.cities = [];
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCitiesByCountryAndState.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCitiesByCountryAndState.fulfilled, (state, action) => {
        state.loading = false;
        state.cities = action.payload;
        state.error = null;
      })
      .addCase(getCitiesByCountryAndState.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCities, clearError } = locationSlice.actions;
export default locationSlice.reducer;
