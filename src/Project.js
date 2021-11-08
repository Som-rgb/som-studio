import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

import Forward from "./images/Forward.svg";
import Back from "./images/Back.svg";

interface Params {
  location: any;
}

const Project: React.FC<Params> = () => {
  let location = useLocation();
  const [projectNum, setProjectNum] = useState(
    Number(location.state.projectNum)
  );
  const [projectTitle, setProjectTitle] = useState([
    location.state.projectTitle,
  ]);
  const [projectBlurb, setProjectBlurb] = useState(location.state.projectBlurb);
  const projectCategory = location.state.projectCategory;
  const projectTotalNum = Number(location.state.projectTotalNum);
  const projectList = location.state.project.projectList;

  const handleButtonBack = () => {
    if (projectNum === 1) {
      setProjectNum(projectTotalNum);
    } else {
      setProjectNum(projectNum - 1);
    }
  };

  const handleButtonForward = () => {
    if (projectNum === projectTotalNum) {
      setProjectNum(1);
    } else {
      setProjectNum(projectNum + 1);
    }
  };

  useEffect(() => {
    const newProjectTitle = projectList.find(
      (task) => Number(task.key) === projectNum
    );
    setProjectTitle(newProjectTitle.title);
    setProjectBlurb(newProjectTitle.blurb);
  }, [projectNum, projectList]);

  return (
    <>
      <Container>
        <Row className="border-bottom border-dark">
          <Col className="d-flex ms-auto" md={9}>
            {projectCategory} / {projectTitle}
          </Col>
          <Col className="d-flex me-auto" md={1}>
            <Button variant="link" className="arrow" onClick={handleButtonBack}>
              <img src={Back} alt="Previous project" />
            </Button>
          </Col>

          <Col className="d-flex justify-content-center" md={1}>
            {projectNum} / {projectTotalNum}
          </Col>

          <Col className="d-flex me-auto" md={1}>
            <Button
              variant="link"
              className="arrow"
              onClick={handleButtonForward}
            >
              <img src={Forward} alt="Next project" />
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2>{projectTitle}</h2>
            <p>{projectBlurb}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Project;
