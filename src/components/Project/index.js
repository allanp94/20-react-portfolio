import React from "react";

import { FaGithub } from "react-icons/fa";

const Project = ({ projects }) => {
  return (
    <div className="container is-centered is-fluid">
      <div className="notification has-background-light">
        <div className="tile is-ancestor is-flex-wrap-wrap is-flex-touch is-justify-content-space-between">
          {projects.map((prjct) => (
            <div className="tile is-5 is-parent m-2 img-container">
              <div className="tile is-child" key={prjct.title}>
                <a href={prjct.link} target="_blank" className="project-img">
                  <img
                    src={prjct.image}
                    className="project-img"
                    alt={prjct.title}
                  />
                </a>
                <div className="img-icon">
                  <a className="is-size-5 " href={prjct.link} target="_blank">
                    {prjct.title}
                  </a>
                  <a
                    className="ml-5 is-size-2"
                    href={prjct.githubLink}
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
