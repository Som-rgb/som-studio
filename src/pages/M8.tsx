import { Container, Row, Col } from "react-bootstrap";

const M8 = () => {
  return (
    <>
      <Container>
        <div className="project-container">
          <Row>
            <Col sm={2} md={2}>
              <div className="project-text-container">
                <h2>M8</h2>
                <p>
                  M8 modernises and automates the sales data capture process for
                  a portfolio of assets for a national retailer
                </p>
              </div>
            </Col>
            <Col sm={8} md={8}>
              <iframe
                // style="border: 1px solid rgba(0, 0, 0, 0.1);"
                className="iframe"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FKRxlBAAl7vtUs4JvSKhOpm%2FM8%3Fpage-id%3D0%253A1%26node-id%3D2%253A20%26viewport%3D331%252C48%252C0.57%26scaling%3Dcontain%26starting-point-node-id%3D2%253A20%26hide-ui%3D1"
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
export default M8;
