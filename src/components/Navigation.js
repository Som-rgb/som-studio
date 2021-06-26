import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Header from "./Header.js";

const Navigation = () => {
  return (
    <>
      <Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <LinkContainer to="/home">
              <Nav.Link>HOME</Nav.Link>
            </LinkContainer>
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
        </Navbar.Collapse>
      </Navbar>
      <Header />
    </>
  );
};

export default Navigation;
