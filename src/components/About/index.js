import React from "react";
import Avatar from "react-avatar";

function About() {
  return (
    <div>
      <div class="container is-fluid">
        <div class="notification has-background-light">
          <h1 class="is-size-2 ml-2 mb-5 has-text-grey">About Me</h1>
          <Avatar
            name="Foo Bar"
            size="250"
            src={require(`../../img/allan-heroImg.jpg`).default}
            round={true}
          />
          <div class="mt-6">
            Next, we will personalize the application's navigation bar to the
            logged-in user. Most modern web applications do something like this,
            where a logged-out user sees navigation items geared towards getting
            them to sign up or log in; but a logged-in user sees navigation
            items geared towards them viewing their personalized data or logging
            out. Let's navigate to the index.js file, located in the Header
            folder in the components directory. The first thing we need to do is
            import the AuthService functionality we just created, so let's do so
            with the following import statement towards the top of the file:
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
