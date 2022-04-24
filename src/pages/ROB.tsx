import { Container, Row, Col } from "react-bootstrap";

const ROB = () => {
  return (
    <>
      <Container>
        <div className="project-container">
          <Row>
            <Col sm={2} md={2}>
              <div className="project-text-container">
                <h2>ROB</h2>
                <p>
                  ROB supports industry and drives business to Australian
                  Robotic test sites by providing a digital eco-sytem that
                  fosters a forward-leaning community.
                </p>
              </div>
            </Col>
            <Col sm={8} md={8}>
              <iframe
                // style="border: 1px solid rgba(0, 0, 0, 0.1);"
                className="iframe"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FDFkrQs7XqUFpFEMVVU3iG0%2FB2B%3Fpage-id%3D0%253A1%26node-id%3D21%253A1241%26viewport%3D241%252C48%252C0.35%26scaling%3Dcontain%26starting-point-node-id%3D21%253A1241%26hide-ui%3D1"
              ></iframe>
              <h6 className="figma-container">
                This is just an embedded Figma file, scroll right on the frame!
                →
              </h6>
            </Col>
            <Col sm={2} md={2}></Col>
          </Row>
        </div>
      </Container>
    </>
  );
};
export default ROB;
