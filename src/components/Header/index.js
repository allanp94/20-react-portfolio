import React, { useState } from "react";
import Nav from "../Nav/";
import About from "../About";
import { current } from "immer";

function Header() {
  const navOptions = [
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ];

  const [currentOption, setCurrentOption] = useState(navOptions[0]);

  const renderOption = (optionName) => {
    console.log(optionName);
    switch (optionName) {
      case "About Me":
        return <About />;
        break;
      case "Portfolio":
        // return <Portfolio />;
        return "Portfolio";
        break;
      case "Contact":
        // return <Contact />;
        return "contact";
        break;
      case "Resume":
        // return <Resume />;
        return "resume";
        break;
      default:
        return "";
        break;
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
