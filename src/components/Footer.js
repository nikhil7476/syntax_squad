import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaLaptopCode,
} from "react-icons/fa";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col xl={6} lg={6} md={6} sm={12} xs={12}>
            <Link href="/" title="SyntaxSquad" className={styles.left}>
              <FaLaptopCode className={styles.logoIcon} />
              SyntaxSquad
            </Link>
          </Col>
          <Col
            xl={6}
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className={`d-flex gap-4 justify-content-end ${styles.socialIcons}`}
          >
            <Link
              href="https://facebook.com/"
              title="Facebook"
              className={styles.icon}
            >
              <FaFacebookF />
            </Link>
            <Link href="https://x.com/" title="Twitter" className={styles.icon}>
              <FaTwitter />
            </Link>
            <Link
              href="https://likedin.com/"
              title="LinkedIn"
              className={styles.icon}
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://instagram.com"
              title="Instagram"
              className={styles.icon}
            >
              <FaInstagram />
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
