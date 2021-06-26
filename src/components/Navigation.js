import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Header from "./Header.js";

const Navigation = () => {
  return (
    <>
      <Navbar>
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Container>
          <Nav className=" d-flex ms-auto">
            <LinkContainer to="/ux-ui">
              <Nav.Link>UX / UI</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/branding">
              <Nav.Link>BRANDING</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/illustration">
              <Nav.Link>ILLUSTRATION</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/photo">
              <Nav.Link>PHOTO</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
      <Header />
    </>
  );
};

export default Navigation;
