import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Header from "./Header";

const Navigation = () => {
  return (
    <>
      <Navbar>
        <Container className="border-bottom border-dark">
          <Nav className="d-flex me-auto">
            <LinkContainer to="/home">
              <Nav.Link className="border-end border-dark">HOME</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="d-flex ms-auto">
            <LinkContainer to="/ux-ui">
              <Nav.Link>WORK</Nav.Link>
            </LinkContainer>

            {/* <LinkContainer to="/branding">
              <Nav.Link>BRANDING</Nav.Link>
            </LinkContainer> */}
          </Nav>
        </Container>
      </Navbar>
      <Header />
    </>
  );
};

export default Navigation;
