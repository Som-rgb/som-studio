import { Container, Row, Col } from "react-bootstrap";

const ROB = () => {
  return (
    <>
      <Container>
        <Row className="project-padding">
          <Col md={2}></Col>
          <Col md={8}>
            <h2>ROB</h2>
            <p>
              The process to develop a Robotic system is complex. Understanding
              the regulatory environment to operate robotics in is even more so.
              ROB helps you better understand Australian robotics regulations
              and how to apply them.
            </p>
          </Col>
          <Col md={2}></Col>
        </Row>

        <Row className="project-padding">
          <Col md={1}></Col>
          <Col md={10}>
            <div className="project-container">
              <div className="project-text-container">
                <h6 className="figma-container">
                  View the case study in this embedded figma file, scroll right
                  on the frame! →
                </h6>
                <iframe
                  // style="border: 1px solid rgba(0, 0, 0, 0.1);"
                  className="iframe"
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FDFkrQs7XqUFpFEMVVU3iG0%2FB2B%3Fpage-id%3D0%253A1%26node-id%3D21%253A1241%26viewport%3D241%252C48%252C0.35%26scaling%3Dcontain%26starting-point-node-id%3D21%253A1241%26hide-ui%3D1"
                ></iframe>
              </div>
            </div>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </>
  );
};
export default ROB;
