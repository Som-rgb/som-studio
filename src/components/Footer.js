import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container className="footer">
        <Row>
          <Col>
            <a href="https://www.google.com">EMAIL</a>
          </Col>

          <Col>
            <a href="https://www.google.com">DRIBBLE</a>
          </Col>
          <Col>
            <a href="https://www.google.com">INSTAGRAM</a>
          </Col>
          <Col>2021</Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
