import React from "react";
import projects from "./../data/projects.json";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

const ProjectTile = (props) => {
  const projectList = projects.filter(
    (project) => project.category === props.projectFilter
  );

  const projectListLength = projectList.length;

  return (
    <div>
      {projectList.map((project) => {
        return (
          <div key={project.key}>
            <Container>
              <Row>
                <Col>
                  <Row>
                    <div>
                      {project.title} {project.key}/{projectListLength}
                    </div>
                  </Row>
                  <div>{project.blurb}</div>
                  <Link to={project.link}>React</Link>
                </Col>
                <Col>
                  <div>{project.image}</div>
                </Col>
                <hr></hr>
              </Row>
            </Container>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectTile;
