import { LinkContainer } from "react-router-bootstrap";
import { Row, Col } from "react-bootstrap";
import projects from "../data/projects.json";

import styles from "./ProjectContent.module.scss";
import DownArrow from "../images/down.svg";

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
            <div className={styles["project-container"]}>
              <Row className={styles["project-section"]}>
                <Col md={1}></Col>
                <Col md={4}>
                  <div className={styles["title-container"]}>
                    <h3>{project.title}</h3>
                    <div className={styles["project-number"]}>
                      {project.key}
                    </div>
                    <div className={styles["project-blurb"]}>
                      <p>{project.blurb}</p>
                    </div>
                  </div>
                </Col>
                <Col md={1}></Col>
                <Col md={5}>
                  <img
                    className={styles["project-image"]}
                    src={project.image}
                    alt={project.title}
                    key={project.key}
                  />
                </Col>
                <Col md={1}></Col>
              </Row>

              <Row className={styles["project-section"]}>
                <Col md={1}></Col>
                <Col md={4}>
                  <div>
                    <img
                      className={styles["project-image"]}
                      src={project.image}
                      alt={project.title}
                      key={project.key}
                    />
                  </div>
                </Col>
                <Col md={5} className="d-flex justify-content-end">
                  <div className={styles["subtitle-container"]}>
                    <p>{project.blurb}</p>
                  </div>
                </Col>
              </Row>

              <Row className="d-flex justify-content-end">
                <Col sm={9} md={9}></Col>
                <Col sm={1} md={1}>
                  <div className="d-flex justify-content-end">
                    <div className={styles["down-arrow"]}>
                      <LinkContainer to={{ pathname: "/project" }}>
                        <img src={DownArrow} alt="down" />
                      </LinkContainer>
                    </div>
                  </div>
                </Col>
                <Col sm={1} md={1}>
                  <LinkContainer to="/home" className="logo-rotate">
                    <h2>SOM STUDIO</h2>
                  </LinkContainer>
                </Col>
              </Row>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectContent;
