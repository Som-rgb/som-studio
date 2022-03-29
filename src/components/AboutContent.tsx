import { Col } from "react-bootstrap";

import Desk from "../images/desk.png";

import styles from "../components/AboutContent.module.scss";

const AboutContent = () => {
  return (
    <>
      <Col sm={1} md={1}></Col>
      <Col sm={7} md={7}>
        <img src={Desk} alt="desk" className={styles["left-image"]} />
        <div className={styles["bottom-text"]}>
          <h6>Here is another picture of Som Studio.</h6>
        </div>
      </Col>
      <Col sm={3} md={3}>
        <div className={styles["text-box"]}>
          <p>
            I am a UX designer with experience in product design, workshop
            facilitation and branding. I did an interactive design and business
            degree with a bit of{" "}
            <a href="https://www.linkedin.com/in/sommerdeo/">experience</a>{" "}
            inbetween. Other than that, I enjoy
            <a href="https://www.instagram.com/som.draws/">
              {" "}
              digital drawing
            </a>{" "}
            and front-end dev - I made this website!
          </p>
        </div>
      </Col>
    </>
  );
};
export default AboutContent;
