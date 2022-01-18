import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

function App() {
  const navOptions = [
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Resume" },
  ];

  const [currentOption, setCurrentOption] = useState(navOptions[0].name);

  const renderOption = (optionName) => {
    switch (optionName) {
      case "About Me":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Header
        navOptions={navOptions}
        currentOption={currentOption}
        setCurrentOption={setCurrentOption}
      />
      {renderOption(currentOption)}
      <Footer />
    </div>
  );
}

export default App;
