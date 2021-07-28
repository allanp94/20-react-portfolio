import React from "react";

const Nav = (props) => {
  const { navOptions, currentOption, setCurrentOption } = props;
  return (
    <nav
      className="navbar is-justify-content-space-evenly is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-menu is-active">
        <div className="navbar-start">
          <p className=" is-large is-ghost is-inverted is-size-2 has-text-info-dark is-centered m-4">
            Allan Pirillis
          </p>
        </div>

        <div id="navbarHamburger" className="navbar-end has-text-dark ">
          {navOptions.map((opt) => (
            <a
              className={`navbar-item has-text-info-dark is-size-4 is-family-sans-serif ${
                currentOption === opt.name &&
                ` has-text-weight-bold is-underlined is-family-code`
              }`}
              href={`#${opt.name === "About Me" ? "About" : opt.name}`}
              key={opt.name}
              onClick={() => setCurrentOption(opt.name)}
            >
              {opt.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
