import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaLaptopCode } from "react-icons/fa";
import styles from "@/styles/Header.module.css";
import OffHeader from "./OffHeader";

const Header = () => {
  return (
    <Navbar expand="lg" className={styles.navbar} sticky="top">
      <Container>
        <Navbar.Brand href="/" title="SyntaxSquad" className={styles.logo}>
          <FaLaptopCode className={styles.logoIcon} />
          <span>SyntaxSquad</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={styles.toggleBtn}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/" className={styles.link}>
              Home
            </Nav.Link>
            <Nav.Link href="/about-us" className={styles.link}>
              About Us
            </Nav.Link>
            <Nav.Link href="/our-services" className={styles.link}>
              Our Services
            </Nav.Link>
            <Nav.Link href="/portfolio" className={styles.link}>
              Portfolio
            </Nav.Link>
            <Nav.Link href="/blog" className={styles.link}>
              Blog
            </Nav.Link>
            <Nav.Link href="/contact-us" className={styles.link}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <OffHeader />
      </Container>
    </Navbar>
  );
};

export default Header;
