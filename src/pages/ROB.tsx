import { Container, Row, Col } from "react-bootstrap";

const ROB = () => {
  return (
    <>
      <Container>
        <Row className="project-padding">
          <Col md={1}></Col>
          <Col md={10}>
            <iframe
              // style="border: 1px solid rgba(0, 0, 0, 0.1);"
              className="iframe"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FDFkrQs7XqUFpFEMVVU3iG0%2FB2B%3Fpage-id%3D0%253A1%26node-id%3D21%253A1241%26viewport%3D241%252C48%252C0.35%26scaling%3Dcontain%26starting-point-node-id%3D21%253A1241%26hide-ui%3D1"
            ></iframe>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  );
};
export default ROB;
