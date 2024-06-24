import React from "react";
import CTA from "./CTA";
import "./Header.css";

import { Element, Link } from "react-scroll";
const Header = () => {
  return (
    <Element name="Home">
      <header>
        <div className="container header_container">
          <h5>Hi, I'm</h5>
          <div>
            <h1>Sibel Bouzo</h1>
          </div>
          <h5 className="text-light">And I'm A Front End web Developer</h5>
          <CTA />
        </div>
      </header>
    </Element>
  );
};

export default Header;
