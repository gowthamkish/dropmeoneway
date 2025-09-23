import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import styles from "./Header.module.css";
import logo from "../../assets/logo1.jpeg";


function Header() {
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
          <Navbar.Brand href="#home" className={styles["brand-area"]}>
            <img
              src={logo}
              alt="DropMeOneWay Logo"
              className={styles["logo-img"]}
              style={{ height: 48, marginRight: 12 }}
            />
            {/* <span className={styles["brand-text"]}>
              <span style={{ fontWeight: 700, fontSize: 30, color: '#FFC700', letterSpacing: 1 }}>DROP</span>
              <span style={{ fontWeight: 700, fontSize: 30, color: '#222', letterSpacing: 1 }}>TAXI</span>
              <span style={{ display: 'block', fontSize: 10, color: '#222', letterSpacing: 6, marginTop: 10 }}>ONEWAY</span>
            </span> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto align-items-center" style={{ gap: 24 }} as="ul">
              <Nav.Link as="li" href="#home" className={styles["nav-link"]}>Home</Nav.Link>
              <Nav.Link as="li" href="#about" className={styles["nav-link"]}>About</Nav.Link>
              <Nav.Link as="li" href="#tariff" className={styles["nav-link"]}>Tariff</Nav.Link>
              <Nav.Link as="li" href="#contact" className={styles["nav-link"]}>Contact</Nav.Link>
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
                as="li"
              >
                <span style={{ fontSize: 20, marginRight: 8, fontWeight: 600 }}>+</span>Call 9876543210
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
