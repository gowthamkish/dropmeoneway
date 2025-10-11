import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import styles from "./Header.module.css";
import logo from "../../assets/logo1.jpeg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

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
                style={{ height: 24, marginRight: 12 }}
              />
            </Link>
          </Navbar.Brand>
          {/* <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleShow}
            className="d-lg-none"
          /> */}

          <button
            className={`${styles["menu-toggle"]} d-lg-none`}
            onClick={handleShow}
            aria-controls="responsive-navbar-nav"
            aria-expanded={showOffcanvas}
            aria-label="Toggle navigation"
          >
            <HiMenu size={24} />
          </button>

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
              <Nav.Item as="li">
                <a href="tel:+918838553655" className={styles["call-link"]}>
                  <span className={styles["call-icon"]}>📞</span>
                  Call +918838553655
                </a>
              </Nav.Item>
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
            <img
              src={logo}
              alt="DropMe1Way Logo"
              style={{ width: 150, marginLeft: "-15px" }}
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav
            className="flex-column"
            style={{ rowGap: "2rem" }}
            as="ul"
            onClick={handleClose}
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
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}

export default Header;
