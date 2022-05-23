import { Container, Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

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
                        <h4>{project.category}</h4>
                      </Row>

                      <p>{project.description}</p>
                      <h4>
                        <a href={project.link}>{project.linkTitle}</a>
                      </h4>
                    </Col>
                    <Col md={2}></Col>
                    <Col md={6}>
                      <img
                        className={styles["project-image"]}
                        src={project.image}
                        alt={project.title}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col md={2}></Col>
              </Row>
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
