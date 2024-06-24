import React from "react";
import "./Footer.css";
import { Element, Link } from "react-scroll";
import { BsGithub, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <Element name="">
      <footer className="Footer">
        <Link
          to="Home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={400}
          className="footer_logo"
        >
          Sibel Bouzo
        </Link>
        <ul className="permalinks">
          <li>
            <Link
              to="Home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={400}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={400}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={400}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="Experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={400}
            >
              My Skills
            </Link>
          </li>

          <li>
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={400}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="footer_socials">
          <a href="https://www.linkedin.com/in/sibel-bouzo/" target="_blank">
            <BsLinkedin />
          </a>
          <a href="https://github.com/Sibel-Bouzo" target="_blank">
            <BsGithub />
          </a>
        </div>
        <div className="footer_copyright">
          <small>&copy; Sibel Bouzo. All rights reserved.</small>
        </div>
      </footer>
    </Element>
  );
};

export default Footer;
