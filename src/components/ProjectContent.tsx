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
      <div className={styles["project-title"]}>
        <h2>Latest UX Projects</h2>
      </div>
      {projectList.map((project, key) => {
        return (
          <>
            <Row key={project.key} className={styles["project-container"]}>
              <Col md={1}></Col>
              <Col md={10}>
                <Row
                  className={styles["project-holder"]}
                  style={{ backgroundColor: project.primary }}
                >
                  <Col md={4}>
                    <h2>{project.title}</h2>
                    <p>{project.blurb}</p>
                    <Link to={{ pathname: project.url }}>
                      <Button
                        className="btn-lg"
                        style={{ backgroundColor: project.secondary }}
                      >
                        View Case Study
                      </Button>
                    </Link>
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
              <Col md={1}></Col>
            </Row>
          </>
        );
      })}
    </>
  );
};

export default ProjectContent;
