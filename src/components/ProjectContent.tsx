import { Row, Col, Button } from "react-bootstrap";
import projects from "../data/projects.json";

import { Link } from "react-router-dom";

import styles from "./ProjectContent.module.scss";

interface Params {
  projectFilter: any;
}

const ProjectContent: React.FC<Params> = (projectFilter) => {
  const projectList = projects.filter(
    (project) => project.category === projectFilter.projectFilter
  );

  return (
    <>
      {projectList.map((project, key) => {
        return (
          <>
            <Row key={project.key} className={styles["top-container"]}>
              <Col md={1}></Col>
              <Col md={10}>
                <Row>
                  <Col md={4}>
                    <h2>{project.title}</h2>

                    <Row>
                      <Col
                        md={2}
                        className={styles["project-color"]}
                        style={{ backgroundColor: project.primary }}
                      ></Col>
                      <Col
                        md={2}
                        className={styles["project-color"]}
                        style={{ backgroundColor: project.secondary }}
                      ></Col>
                      <Col
                        md={2}
                        className={styles["project-color"]}
                        style={{ backgroundColor: project.teritaryOne }}
                      ></Col>
                      <Col
                        md={2}
                        className={styles["project-color"]}
                        style={{ backgroundColor: project.teritaryTwo }}
                      ></Col>
                      <Col md={4}></Col>
                    </Row>

                    <h4>The Problem</h4>
                    <p>{project.problemBlurb}</p>
                  </Col>
                  <Col md={2}></Col>
                  <Col md={6}>
                    <img
                      className={styles["project-top"]}
                      src={project.image}
                      alt={project.title}
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={1}></Col>
            </Row>

            <Row className={styles["top-container"]}>
              <Col md={1}></Col>
              <Col md={10}>
                <h4>Some things in here</h4>
              </Col>
              <Col md={1}></Col>
            </Row>

            <Row className={styles["top-container"]}>
              <Col md={1}></Col>
              <Col md={10}>
                <h4>The Solution</h4>
                <p>{project.solutionBlurb}</p>
                <Link to={{ pathname: project.url }}>
                  <Button
                    className="btn-lg"
                    style={{ backgroundColor: project.secondary }}
                  >
                    View Case Study
                  </Button>
                </Link>
              </Col>
              <Col md={1}></Col>
            </Row>
          </>
        );
      })}
    </>
  );
};

export default ProjectContent;
