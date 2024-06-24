import React from "react";
import "./About.css";
import { Element, Link } from "react-scroll";
import img from "../../image/sibel.PNG";

const About = () => {
  return (
    <Element name="About">
      <section className="About">
        <h2>About Me</h2>
        <div className="container about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img src={img} alt="sibel bouzo img" />
            </div>
          </div>
          <div className="about_content">
            <p>
              I'm a skilled Frontend Developer specializing in React, with one
              year experience in frontend development, state management, and
              performance optimization. I thrive on collaboration and am
              committed to continuous learning. Whether tackling large projects
              or innovative prototypes, I bring unwavering dedication and
              enthusiasm to each endeavor
            </p>
            <Link to="Contact" className="btn btn-primary">
              Let's Talk
            </Link>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
