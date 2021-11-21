import { Row } from "react-bootstrap";
import AboutContent from "../components/AboutContent";

import { LinkContainer } from "react-router-bootstrap";

const About = () => {
  return (
    <>
      <LinkContainer to="/home" className="logo d-flex justify-content-end">
        <h2>SOM STUDIO</h2>
      </LinkContainer>
      <Row>
        <AboutContent />
      </Row>
    </>
  );
};

export default About;
