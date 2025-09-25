// generate-sitemap.js
import { createWriteStream } from "fs";
import { SitemapStream } from "sitemap";
import { routes } from "./src/routes.js";

const hostname = "https://dropmeoneway.vercel.app"; // change to your domain

const stream = new SitemapStream({ hostname });
const writeStream = createWriteStream("./public/sitemap.xml");

// Loop through routes and add them to sitemap
routes.forEach((route) => {
  stream.write({
    url: route.path,
    changefreq: route.changefreq || "monthly",
    priority: route.priority || 0.5,
  });
});

stream.end();
stream.pipe(writeStream);

console.log("✅ Sitemap generated dynamically from routes: public/sitemap.xml");