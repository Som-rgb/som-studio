import { Row, Col } from "react-bootstrap";

import styles from "./HomeContent.module.scss";

import Desk from "../images/desk.png";
import Bed from "../images/bed.png";

const HomeContent = () => {
  return (
    <>
      <Row className={styles["home-container"]}>
        <Col sm={1} md={1}></Col>
        <Col sm={7} md={7}>
          <img src={Desk} alt="desk" className={styles["left-image"]} />
          <div className={styles["bottom-text"]}>
            <p>Welcome inside the brain of som studio.</p>
          </div>
        </Col>
        <Col sm={3} md={3}>
          <img src={Bed} alt="bed" className={styles["right-image"]} />
        </Col>
        <Col sm={1} md={1}>
          <div className={styles["left-text"]}>
            <p>
              This is my lil desk set up, pretty cute and where all the studio
              stuff happens.
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HomeContent;
