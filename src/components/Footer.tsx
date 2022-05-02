import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Down from "../images/down.svg";

const Footer = () => {
  return (
    <>
      <Navbar className="fixed-bottom footer">
        <Container>
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

          <Row>
            <Col md={11}></Col>
            <Col md={1}>
              <img src={Down} alt="scroll down" />
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
