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
            <Row key={project.key} className={styles["project-container"]}>
              <Col md={1}></Col>
              <Col md={10}>
                <Row>
                  <Col md={4}>
                    <h2>{project.title}</h2>
                    <h4>The Problem</h4>
                    <p>{project.blurb}</p>
                    <Link to={{ pathname: project.url }}>
                      <Button>View Case Study</Button>
                    </Link>
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
          </>
        );
      })}
    </>
  );
};

export default ProjectContent;
