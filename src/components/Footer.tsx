import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Footer = () => {
  return (
    <>
      <Navbar>
        <Container className=" border-top border-dark fixed-bottom">
          <Nav className="d-flex me-auto">
            <Nav.Link>SOMMERDEO@HOTMAIL.COM</Nav.Link>
            <LinkContainer to="https://dribbble.com/somstudio">
              <Nav.Link>DRIBBLE</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="d-flex ms-auto justify-content-center">
            <LinkContainer to="/home">
              <Nav.Link className="border-start border-dark">2021</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
