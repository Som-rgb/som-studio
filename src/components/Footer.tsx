import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Footer = () => {
  return (
    <>
      <Navbar>
        <Container className="fixed-bottom footer">
          <Nav className="d-flex me-auto">
            <LinkContainer to="/home">
              <Nav.Link>
                <h4>home</h4>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>
                <h4>about</h4>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
