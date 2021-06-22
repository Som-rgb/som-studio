import React from "react";
import projects from "./data/projects.json";

function UXUI() {
  return (
    <div>
      <div>List of UI / UX projects</div>
      <div>
        {projects.map((project) => {
          return (
            <div>
              {project.name}: {project.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UXUI;
