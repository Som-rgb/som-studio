import { Container, Row } from "react-bootstrap";

import ProblemStatement from "../components/ProblemStatement";
import SolutionStatement from "../components/SolutionStatement";
import ProjectContent from "../components/ProjectContent";
import WorkStatement from "../components/WorkStatement";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <ProblemStatement />
        </Row>
        <Row>
          <SolutionStatement />
        </Row>
      </Container>
      <Row>
        <svg height="80px">
          <line
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            style={{ stroke: "#4036ed", strokeWidth: "6px" }}
          />
          Sorry, your browser does not support inline SVG.
        </svg>
      </Row>
      <Row>
        <WorkStatement />
      </Row>
      <Row>
        <svg height="120px">
          <line
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            style={{ stroke: "#4036ed", strokeWidth: "6px" }}
          />
          Sorry, your browser does not support inline SVG.
        </svg>
      </Row>
      <Row>
        <ProjectContent projectFilter="Product development" />
      </Row>
      <Row>
        <ProjectContent projectFilter="User interface" />
      </Row>
      <Row>
        <ProjectContent projectFilter="Design system" />
      </Row>
    </>
  );
};

export default Home;
