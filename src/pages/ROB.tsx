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
                  Easing the process for users to develop robotics by providing
                  regulatory guidance with an ecosystem of pragmatic and
                  user-friendly tools.
                </p>
              </div>
            </Col>
            <Col sm={8} md={8}>
              <iframe
                // style="border: 1px solid rgba(0, 0, 0, 0.1);"
                className="iframe"
                src="https://www.figma.com/proto/DFkrQs7XqUFpFEMVVU3iG0/B2B?page-id=0%3A1&node-id=21%3A1241&viewport=241%2C48%2C0.35&scaling=contain&starting-point-node-id=21%3A1241"
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
