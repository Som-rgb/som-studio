import { Container, Row } from "react-bootstrap";

import Logo from "../components/Logo";
import HomeContent from "../components/HomeContent";
import ProjectContent from "../components/ProjectContent";

const Home = () => {
  return (
    <>
      <Logo />
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
