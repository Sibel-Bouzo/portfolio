import React, { useEffect } from "react";
import "./Experience.css";
import { HiBadgeCheck } from "react-icons/hi";
import { Element } from "react-scroll";

const Experience = () => {
  return (
    <Element name="Experience">
      <section
        className="Experience"
        style={{ marginTop: "2rem", paddingTop: "0rem" }}
      >
        <h2>My Skills</h2>
        <div className="experience_container">
          <div className="experience_frontend">
            <h3>FrontEnd Development</h3>
            <div className="experience_content">
              <div className="experience_content-box">
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>React</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>HTML · CSS</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>React query</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
              </div>
              <div className="experience_content-box-react">
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>JavaScript </h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>Tailwind css · Shadcn</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>

                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>Git Version Control</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
              </div>
              <div className="experience_content-box-react">
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>SEO</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
              </div>
            </div>
            <div className="experience_content-mobile">
              <div className="experience_content-box">
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>React</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>JavaScript </h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>SEO </h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>HTML · CSS · Tailwind css</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>MUI · Shadcn </h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>

                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>React query </h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="experience_backend">
            <h3>Soft Skills</h3>
            <div className="experience_content soft-skills">
              <div className="experience_content-box">
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>Teamwork</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>Attention to details</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
              </div>
              <div className="experience_content-box">
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>Adaptability</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>Creativity</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
              </div>
              <div className="experience_content-box">
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>Time management</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>Work ethic</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Experience;
