import React from "react";
import { Element } from "react-scroll";
import "./Skills.css";

const Skills = () => {
  const slides = [
    {
      id: "1",
      date: "Dec/2023 - present ",
      company: " Pancode Company",
      title: "Front End Developer",
      content:
        "Working on projects using React, assisted with troubleshooting and bug fixing as needed.",
    },
  ];

  return (
    <Element name="skills">
      <section className="skills">
        <h2>Experience</h2>
        <div className="container skills_container">
          <div className="embla">
            <div className="embla__container">
              {slides.map((slide, index) => (
                <div key={slide.id} className="skills_cards embla__slide">
                  <div className={`skills_card`}>
                    <div className="hreader-skills_card">
                      <label>
                        <span className="workDate">{slide.date}</span>
                        {slide.title}
                      </label>
                    </div>
                    <p>{slide.company}</p>
                    <small>{slide.content}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Skills;
