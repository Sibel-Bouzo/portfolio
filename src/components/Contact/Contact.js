import React, { useRef } from "react";
import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { Element } from "react-scroll";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  const form = useRef();

  return (
    <Element name="Contact">
      <section className="Contact">
        <h2>Contact Me</h2>
        <div className="container contact_container">
          <div className="contact_options">
            <a href="mailto:bouzo.sibel@gmail.com" target="_blank">
              <article className="contact_option">
                <HiOutlineMail className="contact_option-icon" />
                <h3>Email</h3>
                <h4>bouzo.sibel@gmail.com</h4>
              </article>
            </a>

            <a href="https://www.linkedin.com/in/sibel-bouzo/" target="_blank">
              <article className="contact_option">
                <FaLinkedin className="contact_option-icon" />
                <h3>Linkedin</h3>
                <h4>www.linkedin.com/in/sibel-bouzo/</h4>
              </article>
            </a>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
