import { Row } from "react-bootstrap";

import HomeContent from "../components/HomeContent";
import ProjectContent from "../components/ProjectContent";

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
      <Row>
        <ProjectContent projectFilter="UI/UX" />
      </Row>
    </>
  );
};

export default Home;
