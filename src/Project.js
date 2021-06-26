import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Project = () => {
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
        <Row>
          <Col className="d-flex ms-auto" md={10}>
            {projectCategory} / {projectTitle}
          </Col>
          <Col className="d-flex me-auto" md={2}>
            <button onClick={handleButtonBack}>Back</button>
            {projectNum} / {projectTotalNum}
            <button onClick={handleButtonForward}>Forward</button>
          </Col>
          <Col>
            <div>{projectTitle}</div>
            <div>{projectBlurb}</div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Project;
