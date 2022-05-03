import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

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
                <h4>about me</h4>
              </Nav.Link>
            </LinkContainer>
          </Nav>

          <Row>
            <Col md={11}></Col>
            <Col md={1}>
              <div className="arrow bounce-2"></div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
