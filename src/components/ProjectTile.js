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
              <Link
                to={{
                  pathname: "/project",
                  state: {
                    projectCategory: project.category,
                    projectNum: project.key,
                    projectTotalNum: projectListLength,
                    projectTitle: project.title,
                    projectBlurb: project.blurb,
                    project: { projectList },
                  },
                }}
              >
                <Row>
                  <Col md={10}>
                    <Row>
                      <div>
                        <h2>{project.title}</h2>
                        <h4>
                          {project.key}/{projectListLength}
                        </h4>
                      </div>
                    </Row>
                    <p>{project.blurb}</p>
                  </Col>
                  <Col md={2}>
                    <div>{project.image}</div>
                  </Col>
                  <hr></hr>
                </Row>
              </Link>
            </Container>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectTile;
