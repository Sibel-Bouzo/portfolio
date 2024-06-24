import React from "react";
import "./Services.css";
import { FiCheck } from "react-icons/fi";
import { Element } from "react-scroll";
const Services = () => {
  return (
    <Element name="Services">
      <section className="Services">
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container services_container">
          <article className="service">
            <div className="service_head">
              <h3>Ui/Ux Designer</h3>
            </div>
            <ul className="service_list">
              <li>
                <FiCheck className="service_list-icon" />
                <p>UX and UI design services for mobile applications</p>
              </li>
              <li>
                <FiCheck className="service_list-icon" />
                <p>Cross-platform design experiments</p>
              </li>
              <li>
                <FiCheck className="service_list-icon" />
                <p>Design workshops</p>
              </li>
              <li>
                <FiCheck className="service_list-icon" />
                <p>Web design services</p>
              </li>
            </ul>
          </article>
          <article className="service">
            <div className="service_head">
              <h3>Web FrontEnd Development</h3>
            </div>
            <ul className="service_list">
              <li>
                <FiCheck className="service_list-icon" />
                <p>Websites</p>
              </li>
              <li>
                <FiCheck className="service_list-icon" />
                <p>Ecommerce</p>
              </li>
              <li>
                <FiCheck className="service_list-icon" />
                <p>Web Applications</p>
              </li>
              <li>
                <FiCheck className="service_list-icon" />
                <p>Content Management System</p>
              </li>
            </ul>
          </article>
          <article className="service">
            <div className="service_head">
              <h3>Photographer</h3>
            </div>
            <ul className="service_list">
              <li>
                <FiCheck className="service_list-icon" />
                <p>
                  Full-day or half-day photo shoots/sessions with all necessary
                  equipment
                </p>
              </li>
              <li>
                <FiCheck className="service_list-icon" />
                <p>Professional camera and lens kits</p>
              </li>
              <li>
                <FiCheck className="service_list-icon" />
                <p>Professional lighting setup</p>
              </li>
              <li>
                <FiCheck className="service_list-icon" />
                <p>Photo editing, color correction and retouching</p>
              </li>
              <li>
                <FiCheck className="service_list-icon" />
                <p>Photo metadata to SEO best practices</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </Element>
  );
};

export default Services;
