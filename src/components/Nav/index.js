import React from "react";

const Nav = (props) => {
  const { navOptions, currentOption, setCurrentOption } = props;
  return (
    <nav
      class="navbar is-justify-content-space-evenly is-transparent"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-menu is-active">
        <div class="navbar-start">
          <button class="button is-large is-ghost is-inverted is-size-2">
            Allan Pirillis
          </button>
        </div>

        <div id="navbarHamburger" class="navbar-end has-text-dark ">
          {navOptions.map((opt) => (
            <a
              class={`navbar-item has-text-info-dark is-size-4 ${
                currentOption === opt.name && `has-text-success`
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
