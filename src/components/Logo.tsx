import { LinkContainer } from "react-router-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const Logo = () => {
  return (
    <>
      <Container className="fixed-top">
        <Row>
          <Col md={8}></Col>
          <Col md={4}>
            <LinkContainer to="/home" className="title">
              <h1>SOM STUDIO</h1>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Logo;
