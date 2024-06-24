import React, { useState } from "react";
import "./Protofilo.css";
import { Element } from "react-scroll";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-thumbnail.css";

import image1 from "../../image/mfz.png";
import image2 from "../../image/cv-generator.png";
import image3 from "../../image/todoo.png";

const Protofilo = () => {
  const [activebtn, setactivebtn] = useState(true);
  return (
    <Element name="Portfolio">
      <section className="Protofilo">
        <h5>My Recent Works</h5>
        <h2>Portfolio</h2>

        {activebtn && (
          <div className="container protofilo_container">
            <article className="Protofilo_item">
              <div className="Protofilo_item-image">
                <a href="https://mfzcapitalgroup.com/" target="_blank">
                  <img alt="Login Page" src={image1} />
                </a>
              </div>
              <h3>MFZ - Food Trading</h3>
              <p
                style={{
                  fontSize: "15px",
                  opacity: "0.5",
                  cursor: "pointer",
                }}
              >
                Click to visit the site
              </p>
            </article>

            <article className="Protofilo_item">
              <div className="Protofilo_item-image">
                <a href="https://sibel-bouzo.github.io/cv-it/" target="_blank">
                  <img alt="Login Page" src={image2} />
                </a>
              </div>
              <h3>Cv Generator</h3>
              <p
                style={{
                  fontSize: "15px",
                  opacity: "0.5",
                  cursor: "pointer",
                }}
              >
                Click to visit the site
              </p>
            </article>

            <article className="Protofilo_item">
              <div className="Protofilo_item-image">
                <a
                  href="https://sibel-bouzo.github.io/todo-app/"
                  target="_blank"
                >
                  <img alt="Login Page" src={image3} />
                </a>
              </div>
              <h3>Todo Website</h3>
              <p
                style={{
                  fontSize: "15px",
                  opacity: "0.5",
                  cursor: "pointer",
                }}
              >
                Click to visit the site
              </p>
            </article>
          </div>
        )}
      </section>
    </Element>
  );
};

export default Protofilo;
