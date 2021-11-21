import { Row } from "react-bootstrap";

import HomeContent from "../components/HomeContent";
import ProjectContent from "../components/ProjectContent";

import { LinkContainer } from "react-router-bootstrap";

const Home = () => {
  return (
    <>
      <LinkContainer to="/home" className="logo d-flex justify-content-end">
        <h2>SOM STUDIO</h2>
      </LinkContainer>
      <Row>
        <HomeContent />
      </Row>
      <Row>
        <ProjectContent projectFilter="UI/UX" />
      </Row>
    </>
  );
};

export default Home;
