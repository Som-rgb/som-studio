import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <LinkContainer to="/AboutYou">
            <Nav.Link>About You</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/AboutAginic">
            <Nav.Link>About Aginic</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/Roadmap">
            <Nav.Link>Roadmap</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/Resources">
            <Nav.Link>Resources</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;