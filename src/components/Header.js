import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <LinkContainer to="/ux-ui">
            <Nav.Link>UX / UI</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/branding">
            <Nav.Link>Branding</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/illustrations">
            <Nav.Link>Illustrations</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
