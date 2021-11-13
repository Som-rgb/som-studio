import { Col } from "react-bootstrap";

import Desk from "../images/desk.png";

import styles from "../components/AboutContent.module.scss";
import { LinkContainer } from "react-router-bootstrap";

const AboutContent = () => {
  return (
    <>
      <Col sm={1} md={1}></Col>
      <Col sm={7} md={7}>
        <img src={Desk} alt="desk" className={styles["left-image"]} />
        <div className={styles["bottom-text"]}>
          <p>Here is a little description about the image above.</p>
        </div>
      </Col>
      <Col sm={3} md={3}>
        <div className={styles["text-box"]}>
          <p>
            Here is a large section about what I think I am and who I am about I
            suppose. There’s not too much to it really. Here is a large section
            about what I think I am and who I am about I suppose. There’s not
            too much to it really. Here is a large section about what I think I
            am and who I am about I suppose.
          </p>
        </div>
      </Col>
      <Col sm={1} md={1}>
        <div className={styles["about-links"]}>
          <LinkContainer to="medium.com">
            <h4>medium</h4>
          </LinkContainer>
        </div>
      </Col>
    </>
  );
};
export default AboutContent;
