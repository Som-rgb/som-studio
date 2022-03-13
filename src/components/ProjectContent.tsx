import { LinkContainer } from "react-router-bootstrap";
import { Row, Col } from "react-bootstrap";
import projects from "../data/projects.json";

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
          <div
            key={project.key}
            className="container"
            style={{ backgroundColor: project.primarycolor }}
          >
            <LinkContainer to={{ pathname: project.url }}>
              <div className={styles["project-container"]}>
                <Row className={styles["project-section"]}>
                  <Col md={2}></Col>
                  <Col md={3}>
                    <div className={styles["title-container"]}>
                      <h3>{project.title}</h3>
                      <div className={styles["project-blurb"]}>
                        <p>{project.blurb}</p>
                      </div>
                    </div>
                  </Col>
                  <Col md={5}>
                    <img
                      className={styles["project-image"]}
                      src={project.image}
                      alt={project.title}
                    />
                  </Col>
                  <Col md={2}></Col>
                </Row>
              </div>
            </LinkContainer>

            <div className="logo-container">
              <div
                className="logo-rotate"
                style={{ backgroundColor: project.secondarycolor }}
              >
                <LinkContainer to="/home">
                  <h4>SOM STUDIO</h4>
                </LinkContainer>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectContent;
