import React, { useState } from "react";
import Nav from "../Nav/";

function Header(props) {
  const { navOptions, currentOption, setCurrentOption } = props;

  return (
    <Nav
      navOptions={navOptions}
      currentOption={currentOption}
      setCurrentOption={setCurrentOption}
    ></Nav>
  );
}

export default Header;
