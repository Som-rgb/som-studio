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
          <p>Here is another picture of Som Studio.</p>
        </div>
      </Col>
      <Col sm={3} md={3}>
        <div className={styles["text-box"]}>
          <p>
            I am an experienced and well rounded Digital Designer that works
            well with cross-functional teams to take ideas from concept to
            execution. I approach projects with creativity and passion backed by
            insights from a skill set rooted in user-experience, user
            interfaces, information architecture, digital illustration and
            front-end code.
            <br></br>
            <br></br>I have experience in{" "}
            <a href="https://www.linkedin.com/in/sommerdeo/">
              product design, workshop facilitation and branding
            </a>
            , with a background in interactive design and business. Outside of
            work, I enjoy
            <a href="https://www.instagram.com/som.draws/">
              {" "}
              digital illustration
            </a>{" "}
            and front-end dev - I made this using React and Git.
          </p>
        </div>
      </Col>
    </>
  );
};
export default AboutContent;
