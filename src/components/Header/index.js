import React, { useState } from "react";
import Nav from "../Nav/";
import About from "../About";
import Contact from "../Contact";
import Portfolio from "../Portfolio";

function Header() {
  const navOptions = [
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ];

  const [currentOption, setCurrentOption] = useState(navOptions[0]);

  const renderOption = (optionName) => {
    switch (optionName) {
      case "About Me":
        return <About />;

      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        // return <Resume />;
        return "resume";
      default:
        return "";
    }
  };

  return (
    <>
      <Nav
        navOptions={navOptions}
        currentOption={currentOption}
        setCurrentOption={setCurrentOption}
      ></Nav>
      {renderOption(currentOption)}
    </>
  );
}

export default Header;
