import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [errorMessage, setErrorMessage] = useState("");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    console.log("errorMessage", errorMessage);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <div className="container is-fluid">
        <div className="notification has-background-light">
          <h1 className="is-size-2 ml-2 mb-5 has-text-grey is-family-code">
            Contact Me
          </h1>

          <div className="field" onSubmit={handleSubmit}>
            <label className="label is-family-code">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Text input"
                onBlur={handleChange}
                name="name"
              />
            </div>
          </div>

          <div className="field">
            <label className="label is-family-code">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                placeholder="@gmail.com"
                onBlur={handleChange}
                name="email"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-exclamation-triangle"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label is-family-code">Message</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Textarea"
                onBlur={handleChange}
                name="message"
              ></textarea>
            </div>
          </div>
          {errorMessage && (
            <div>
              <p classNameName="is-danger">{errorMessage}</p>
            </div>
          )}
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link is-family-code" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
