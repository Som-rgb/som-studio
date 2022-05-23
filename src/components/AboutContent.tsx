import { Row, Col } from "react-bootstrap";

import Som from "../images/Solution.svg";

import styles from "../components/Statements.module.scss";

const AboutContent = () => {
  return (
    <>
      <Row className="project-padding">
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
            <p>
              I am an experienced and well rounded Digital Designer that works
              well with cross-functional teams to take ideas from concept to
              execution. I approach projects with creativity and passion backed
              by insights from a skill set rooted in UX, UI, information
              architecture, agile methodologies and front-end code. Regardless
              of the type of project, my approach prioritises users first, and
              involves engaging them in an iterative design process that
              welcomes consistent and constructive feedback.
            </p>
            <h4>
              <a href="https://www.linkedin.com/in/sommerdeo/">
                Reach out to me!
              </a>
            </h4>
          </Row>
        </Col>
        <Col md={1}></Col>
        <Col md={3} className={styles["image-container"]}>
          <img src={Som} alt="Sommer" className={styles["image"]} />
        </Col>
        <Col md={1}></Col>
      </Row>
    </>
  );
};
export default AboutContent;
