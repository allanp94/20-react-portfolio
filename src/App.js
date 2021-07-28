import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
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
