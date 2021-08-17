import React from "react";

const Resume = () => {
  return (
    <>
      <a
        href={uploadedFileLink}
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <Button>
          <i className="fas fa-download" />
          Download File
        </Button>
      </a>
      <section className="hero is-small notification">
        <div class="content">
          <h1>Education</h1>
          <p>
            <span className="is-size-4">
              Full Stack Web Developer Certificate
            </span>
            <br /> Online Bootcamp Trilogy Education Services
            <br /> Ongoing <br />
          </p>
          <br />
          <p>
            <span className="is-size-4">B.S. in Computer Science</span>
            <br /> North Dakota State University, Fargo, ND.
            <br /> 2019 <br />
            GPA: 3.4/4
          </p>
          <dl>
            <h2>Skills</h2>
            <dt>Front-End</dt>
            <dd>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JSON</li>
                <li>AJAX</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Bulma</li>
              </ul>
            </dd>
            <br />
            <dt>Back-End</dt>
            <dd>
              <ul>
                <li>JQuery</li>
                <li>API</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>GraphQL</li>
                <li>SQL</li>
                <li>Node.js</li>
                <li>Express.s</li>
              </ul>
            </dd>
          </dl>
        </div>
      </section>
    </>
  );
};

export default Resume;
