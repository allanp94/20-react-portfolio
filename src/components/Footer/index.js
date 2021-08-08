import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="footer notification">
      <div class="content has-text-centered">
        <div class="level is-mobile">
          <div class="level-item has-text-centered">
            <div>
              <a
                href={"https://github.com/allanp94"}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="is-size-3" />
              </a>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <span className="content is-small">
                Created and Designed by{" "}
                <span className="allan-user is-small">Allan Pirillis</span>
              </span>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <a
                href={"https://www.linkedin.com/in/allan-pirillis/"}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="is-size-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
