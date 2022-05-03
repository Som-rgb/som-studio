import { Row, Col } from "react-bootstrap";

import Som from "../images/Som.png";

import styles from "../components/Statements.module.scss";

const AboutContent = () => {
  return (
    <>
      <Row className={styles["main-container"]}>
        <Col md={1}></Col>
        <Col md={5}>
          <Row>
            <h3>
              Hey! I'm Sommer, a Digital Designer that approaches projects with
              technical understanding and creativity.
            </h3>
          </Row>
          <Row>
            <svg height="40px">
              <line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                style={{ stroke: "#4036ed", strokeWidth: "4px" }}
              />
              Sorry, your browser does not support inline SVG.
            </svg>
          </Row>
          <Row>
            <Col md={6}>
              <h3>2+</h3>
              <h4>Years of Experience</h4>
            </Col>
            <Col md={6}>
              <h3>5</h3>
              <h4>Software projects</h4>
            </Col>
          </Row>
        </Col>
        <Col md={1}></Col>
        <Col md={3} className={styles["image-container"]}>
          <img src={Som} alt="Girl frowning" className={styles["image"]} />
        </Col>
        <Col md={1}></Col>
      </Row>
      <Row>
        <h4>A list of my experiences</h4>
      </Row>
    </>
  );
};
export default AboutContent;
