import { Row } from "react-bootstrap";

import Logo from "../components/Logo";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <>
      <Logo />
      <Row>
        <AboutContent />
      </Row>
    </>
  );
};

export default About;
