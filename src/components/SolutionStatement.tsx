import { Row, Col } from "react-bootstrap";

import styles from "./Statements.module.scss";

import Solution from "../images/Solution.svg";
import Bullet from "../images/Bullet.svg";

const ProblemStatement = () => {
  return (
    <>
      <Row className={styles["main-container"]}>
        <Col md={1}></Col>
        <Col md={3} className={styles["image-container"]}>
          <img src={Solution} alt="Girl smiling" className={styles["image"]} />
        </Col>
        <Col md={1}></Col>
        <Col md={5}>
          <Row>
            <h3>
              Som is a Digital Designer that approaches projects with technical
              understanding and creativity.
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
                  UX Research
                </h4>

                <p className={styles["subtext"]}>
                  Observe and conduct research with end users to inform design
                  decisions.
                </p>
              </Row>

              <Row>
                <h4 className={styles["subtitle"]}>
                  {" "}
                  <img src={Bullet} alt="Bullet point" />
                  Information Architecture
                </h4>

                <p className={styles["subtext"]}>
                  TDetermine what users expect to see and how content is
                  displayed and accessed.
                </p>
              </Row>
            </Col>

            <Col md={6}>
              <Row>
                <h4 className={styles["subtitle"]}>
                  {" "}
                  <img src={Bullet} alt="Bullet point" />
                  UI Design
                </h4>

                <p className={styles["subtext"]}>
                  Consider the interactiveness of a user interface that is
                  consistent and appealing.
                </p>
              </Row>

              <Row>
                <h4 className={styles["subtitle"]}>
                  {" "}
                  <img src={Bullet} alt="Bullet point" />
                  Front End Development
                </h4>

                <p className={styles["subtext"]}>
                  Streamlined WoW with developers with an understanding of the
                  code.
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

export default ProblemStatement;
