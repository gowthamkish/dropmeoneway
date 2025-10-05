import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.css";
import logo from "../../assets/logo1.jpeg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${styles["app-header"]}`}
        as="nav"
      >
        <Container fluid>
          {/* Logo and Brand */}
          <Navbar.Brand className={styles["brand-area"]}>
            <Link to="/">
              <img
                src={logo}
                alt="DropMe1Way Logo"
                className={styles["logo-img"]}
                style={{ height: 48, marginRight: 12 }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleShow}
            className="d-lg-none"
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="d-none d-lg-flex"
          >
            <Nav
              className="ms-auto align-items-center"
              style={{ gap: 24 }}
              as="ul"
            >
              <Nav.Item as="li">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles["nav-link"]} ${styles["active"]}`
                      : styles["nav-link"]
                  }
                  end
                >
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles["nav-link"]} ${styles["active"]}`
                      : styles["nav-link"]
                  }
                >
                  About
                </NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                <NavLink
                  to="/tariff"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles["nav-link"]} ${styles["active"]}`
                      : styles["nav-link"]
                  }
                >
                  Tariff
                </NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? `${styles["nav-link"]} ${styles["active"]}`
                      : styles["nav-link"]
                  }
                >
                  Contact
                </NavLink>
              </Nav.Item>
              {/* <Nav.Item as="li">
                <Button
                  className={styles["call-button"]}
                  style={{
                    background: '#25d8e0',
                    border: 'none',
                    borderRadius: 24,
                    padding: '8px 32px',
                    fontSize: 16,
                    fontWeight: 500,
                    marginLeft: 24,
                    display: 'flex',
                    alignItems: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                  }}
                  href="tel:9840199985"
                >
                  <span style={{ fontSize: 20, marginRight: 8, fontWeight: 600 }}>+</span>Call 9876543210
                </Button>
              </Nav.Item> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas for mobile/tab */}
      <Offcanvas
        show={showOffcanvas}
        onHide={handleClose}
        placement="end"
        className="d-lg-none"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={logo} alt="DropMe1Way Logo" style={{ width: 150, marginLeft: "-15px" }} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav
            className="flex-column"
            style={{ rowGap: "2rem" }}
            as="ul"
            onClick={handleClose}
          >
            <Nav.Item
              as="li"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `${styles["nav-link"]} ${styles["active"]}`
                    : styles["nav-link"]
                }
                end
              >
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item as="li">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? `${styles["nav-link"]} ${styles["active"]}`
                    : styles["nav-link"]
                }
              >
                About
              </NavLink>
            </Nav.Item>
            <Nav.Item as="li">
              <NavLink
                to="/tariff"
                className={({ isActive }) =>
                  isActive
                    ? `${styles["nav-link"]} ${styles["active"]}`
                    : styles["nav-link"]
                }
              >
                Tariff
              </NavLink>
            </Nav.Item>
            <Nav.Item as="li">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? `${styles["nav-link"]} ${styles["active"]}`
                    : styles["nav-link"]
                }
              >
                Contact
              </NavLink>
            </Nav.Item>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}

export default Header;
