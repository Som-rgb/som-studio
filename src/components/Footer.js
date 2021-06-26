import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container fixed="bottom">
        <Row>
          <Col md={2}>
            <a href="https://www.google.com">EMAIL</a>
          </Col>

          <Col md={2}>
            <a href="https://www.google.com">DRIBBLE</a>
          </Col>

          <Col md={2}>
            <a href="https://www.google.com">INSTAGRAM</a>
          </Col>

          <Col className="d-flex justify-content-md-right">2021</Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
