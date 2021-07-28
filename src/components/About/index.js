import React from "react";
import Avatar from "react-avatar";

function About() {
  return (
    <section className="hero is-small notification">
      <div className="hero-body">
        <h1 className="is-size-2 ml-2 mb-5 has-text-grey is-family-code">
          About Me
        </h1>
        <Avatar
          name="Allan"
          size="250"
          src={require(`../../img/allan-heroImg.jpg`).default}
          round={true}
        />
        <div className="mt-6">
          Next, we will personalize the application's navigation bar to the
          logged-in user. Most modern web applications do something like this,
          where a logged-out user sees navigation items geared towards getting
          them to sign up or log in; but a logged-in user sees navigation items
          geared towards them viewing their personalized data or logging out.
          Let's navigate to the index.js file, located in the Header folder in
          the components directory. The first thing we need to do is import the
          AuthService functionality we just created, so let's do so with the
          following import statement towards the top of the file:
        </div>
      </div>
    </section>
  );
}

export default About;
