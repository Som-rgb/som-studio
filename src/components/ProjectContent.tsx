import projects from "../data/projects.json";
import { Row, Col } from "react-bootstrap";
import styles from "./ProjectContent.module.scss";
import React from "react";
import { isTemplateExpression } from "typescript";

interface Params {
  projectFilter: any;
}

const ProjectContent: React.FC<Params> = (projectFilter) => {
  const projectList = projects.filter(
    (project) => project.category === projectFilter.projectFilter
  );
  return (
    <>
      {projectList.map((project, key, image) => {
        return (
          <div key={project.key}>
            {/* <Link
              to={{
                pathname: "/project",
                state: {
                  projectCategory: project.category,
                  projectNum: project.key,
                  projectTotalNum: projectListLength,
                  projectTitle: project.title,
                  projectBlurb: project.blurb,
                  projectImage: project.image,
                  project: { projectList },
                },
              }}
            > */}

            {/* {props.siteLinks.map((item, key) => (
        <div key={item.title}>
            <li>{item.title}</li>
            {item.submenu.map((x)=>(
              <li key={x.title}>{x.title}</li>
            ))}
        </div>
       ))} */}

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
                    className={styles[`project-image`]}
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
                  <div className={styles["theme-content"]}>
                    {project.themeOneImage}
                  </div>
                </Col>
                <Col md={5}>
                  <div className={styles["subtitle-container"]}>
                    <h4>{project.themeOneTitle}</h4>
                  </div>
                </Col>
              </Row>
              {/* </Link> */}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectContent;
