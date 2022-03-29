import { Row, Col } from "react-bootstrap";
import projects from "../data/projects.json";

import { LinkContainer } from "react-router-bootstrap";

import styles from "./ProjectContent.module.scss";
import Link from "../images/Link.svg";

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
            <Col md={5}>
              <div key={project.key} className={styles["project-container"]}>
                <LinkContainer to={{ pathname: project.url }}>
                  <>
                    <div className={styles["project-title"]}>
                      <div className={styles["project-title-item"]}>
                        <h3>{project.title}</h3>
                      </div>
                      <div className={styles["project-header-item"]}>
                        <img src={Link} alt="Link to"></img>
                      </div>
                    </div>
                    <h5>{project.blurb}</h5>

                    <img
                      className={styles["project-image"]}
                      src={project.image}
                      alt={project.title}
                    />
                  </>
                </LinkContainer>
              </div>
            </Col>
            <Col md={1}></Col>
          </>
        );
      })}
    </>
  );
};

export default ProjectContent;
