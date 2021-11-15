import React from "react";
import Avatar from "react-avatar";

function About() {
  return (
    <section className="hero is-small notification">
      <div className="hero-body ">
        <h1 className="is-size-2 ml-2 mb-5 has-text-grey is-family-code ">
          About Me
        </h1>
        <Avatar
          name="Allan"
          size="250"
          src={require(`../../img/allan-heroImg.jpg`).default}
          round={true}
        />
        <span className="is-size-3 is-flex mt-6">
          "Φαί φύλαξε αλλά δουλεία μεν φυλάξεις"
        </span>
        <div className="mt-6">
          A bilingual Individual that graduated with a B.S in Computer Science
          from NDSU that aspires to continuously learn. Growing up with family
          on both sides of an ocean has taught me the importance of engaging in
          relationships but also the value of maintaining them. With constant
          growth and fluent communication I am eager to apply my skills as a
          Software Developer in our fast paced technological world.{" "}
          <span className="content is-small">
            quote: "Save food but don't save any work"
          </span>
        </div>
        <div className="mt-6 ">
          <p className="mb-4">
            <strong>TECHNICAL SKILLS</strong>
          </p>
          <p className="mb-1 is-flex">
            <em>Languages</em>: JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, Java
          </p>
          <p className="mb-1 is-flex">
            <em>Applications</em>: GitHub, MongoDB, MySQL, GraphQL
          </p>
          <p className="mb-1 is-flex">
            <em>Tools</em>: Express, React, Node, Handlebars, Query, Bootstrap,
            Sequelize, Mongoose, Bulma, Tailwind, ZURB Foundation, Bcrypt,
            Redux, PWA, JWT, REST
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
