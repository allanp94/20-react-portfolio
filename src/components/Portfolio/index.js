import React from "react";
import Project from "../Project";

const Portfolio = () => {
  const projects = [
    {
      title: "Celiac Tackboard",
      link: "https://polar-brook-06864.herokuapp.com/",
      githubLink: "https://github.com/celiac-tackboard/celiac-tackboard",
      image: require("../../img/celiac.png").default,
    },
    {
      title: "Budget Tracker",
      link: "https://budget-tracker34.herokuapp.com/",
      githubLink: "https://github.com/allanp94/19-pwa-budget-tracker",
      image: require("../../img/budget-tracker.png").default,
    },
    {
      title: "On Hand Cooking",
      link: "https://cookitanddontburnit.github.io/onHandCooking/",
      githubLink: "https://github.com/cookItAndDontBurnIt/onHandCooking",
      image: require("../../img/on-hand-cooking.png").default,
    },
    {
      title: "Weather Dashboard",
      link: "https://allanp94.github.io/06-weather-dashboard/",
      githubLink: "https://github.com/allanp94/06-weather-dashboard",
      image: require("../../img/weather-dashboard.png").default,
    },
  ];

  return (
    <section className="hero is-small notification">
      <div className="hero-body">
        <h1 className="title has-text-grey is-family-code">Projects</h1>
        <Project projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
