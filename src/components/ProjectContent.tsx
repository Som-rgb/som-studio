import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import projects from "../data/projects.json";

import Down from "../images/down.svg";

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
            <Container>
              <Row key={project.key} className={styles["top-container"]}>
                <Col md={2}></Col>
                <Col md={8}>
                  <Row>
                    <Col md={4}>
                      <Row className={styles["project-title"]}>
                        <h4>0{project.key}</h4>
                        <h2>{project.title}</h2>
                        <h5>{project.category}</h5>
                      </Row>

                      <Row className={styles["project-colors"]}>
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
                        className={styles["project-image"]}
                        src={project.gif}
                        alt={project.title}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col md={2}></Col>
              </Row>
              <iframe
                // style="border: 1px solid rgba(0, 0, 0, 0.1);"
                className="iframe"
                src={project.caseStudy}
              ></iframe>

              {/* <Row className={styles["bottom-container"]}>
                <Col md={2}></Col>
                <Col md={4}>
                  <img
                    className={styles["project-image"]}
                    src={project.image}
                    alt={project.title}
                  />
                </Col>
                <Col md={2}></Col>
                <Col md={2}>
                  <h4>The Solution</h4>
                  <p>{project.solutionBlurb}</p>
                  <Link to={{ pathname: project.url }}>
                    <h4 className={styles["link"]}>
                      View Case Study
                      <img src={Down} alt="Link" />
                    </h4>
                  </Link>
                </Col>
                <Col md={2}></Col>
              </Row> */}
            </Container>
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
          </>
        );
      })}
    </>
  );
};

export default ProjectContent;
