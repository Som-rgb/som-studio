import { Row } from "react-bootstrap";

import HomeContent from "../components/HomeContent";
import ProjectContent from "../components/ProjectContent";
import About from "../components/AboutContent";

import { LinkContainer } from "react-router-bootstrap";

import Logo from "../images/Som-Studio_black.gif";

const Home = () => {
  return (
    <>
      <LinkContainer to="/home" className="logo-gif">
        <div className="gif">
          <img src={Logo} alt="logo" />
        </div>
      </LinkContainer>
      <Row>
        <HomeContent />
      </Row>
      <Row className="UX-container">
        <div className="header">
          <h2>Latest UX Projects</h2>
        </div>
        <ProjectContent projectFilter="UI/UX" />
      </Row>
      <Row></Row>
    </>
  );
};

export default Home;
