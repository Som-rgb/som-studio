import React from "react";
import projects from "./../data/projects.json";
import { Link } from "react-router-dom";
import { Row, Col, Container, Card } from "react-bootstrap";

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
            <Card>
              <Card.Body className="border-top border-dark">
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
                    <Col>
                      <Row>
                        <Col
                          className="border-bottom border-end border-dark"
                          md={9}
                        >
                          <h3>{project.title}</h3>
                        </Col>
                        <Col
                          className="d-flex me-auto justify-content-center border-bottom border-dark"
                          md={3}
                        >
                          <h4>
                            {project.key}/{projectListLength}
                          </h4>
                        </Col>
                      </Row>
                      <p>{project.blurb}</p>
                    </Col>
                    <Col md={5}>
                      <div>{project.image}</div>
                    </Col>
                  </Row>
                </Link>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectTile;
