import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Footer = () => {
  return (
    <>
      <Navbar fixed="bottom">
        <Container>
          <Nav class=" d-flex me-auto">
            <LinkContainer to="https://www.google.com">
              <Nav.Link>EMAIL</Nav.Link>
            </LinkContainer>
            <LinkContainer to="https://www.google.com">
              <Nav.Link>DRIBBLE</Nav.Link>
            </LinkContainer>
            <LinkContainer to="https://www.google.com">
              <Nav.Link>INSTAGRAM</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
        <Navbar.Brand>2021</Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Footer;
