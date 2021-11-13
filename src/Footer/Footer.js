import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Container className="center" id="footer">
        <Row>
          <Col className="text-center py-3">This is a Chingu project </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
