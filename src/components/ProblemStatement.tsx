import { Row, Col } from "react-bootstrap";

import styles from "./Statements.module.scss";

import Problem from "../images/Problem.svg";
import Bullet from "../images/Bullet.svg";

const SolutionStatement = () => {
  return (
    <>
      <Row className={styles["main-container"]}>
        <Col md={1}></Col>
        <Col md={3} className={styles["image-container"]}>
          <img src={Problem} alt="Girl frowning" className={styles["image"]} />
        </Col>
        <Col md={1}></Col>
        <Col md={5}>
          <Row>
            <h3>
              A project needs some design love that is driven by user insights
              and data points to inform decisions.
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
              <Row>
                <h4 className={styles["subtitle"]}>
                  <img src={Bullet} alt="Bullet point" />
                  Lack of Insights
                </h4>

                <p className={styles["subtext"]}>
                  Why did we decide to implement this design again? Who said it
                  was a good idea?
                </p>
              </Row>

              <Row>
                <h4 className={styles["subtitle"]}>
                  {" "}
                  <img src={Bullet} alt="Bullet point" />
                  Unclear Structure
                </h4>

                <p className={styles["subtext"]}>
                  There are so many artefacts and functions for this app - I'm
                  lost.
                </p>
              </Row>
            </Col>

            <Col md={6}>
              <Row>
                <h4 className={styles["subtitle"]}>
                  {" "}
                  <img src={Bullet} alt="Bullet point" />
                  Little User Engagement
                </h4>

                <p className={styles["subtext"]}>
                  This product has great functionality - but I’m not sold on the
                  story-telling element.
                </p>
              </Row>

              <Row>
                <h4 className={styles["subtitle"]}>
                  {" "}
                  <img src={Bullet} alt="Bullet point" />
                  Poor Dev Handover
                </h4>

                <p className={styles["subtext"]}>
                  What is the latest version of a component? When did it change?
                </p>
              </Row>
            </Col>
          </Row>

          <Col md={1}></Col>
        </Col>
      </Row>
    </>
  );
};

export default SolutionStatement;
