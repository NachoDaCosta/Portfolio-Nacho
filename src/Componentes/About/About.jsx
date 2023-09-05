import React from "react";
import "./about.css";
import "boxicons";

const About = () => {
  return (
    <sectio id="about">
      <div className="image-column-container">
        <div className="fondo-yo">
          <img alt="" src="./imagenes/yo.png" className="yo-image" />
        </div>
        <div className="profile-text-div">
          <p>Profile</p>
        </div>
      </div>

      {/*Segunda columna */}
      <div className="about-container">
        <div className="about-text">
          <h1>About</h1>
          <div className="description">
            Hello, my name is Juan Ignacio but you can call me nacho. I am 21
            years old and I am a Computer Engineering student and I really want
            to develop myself as a professional in the field of web development.
            I have knowledge in: React, Node, Html, Css and PostgreSQL
          </div>
        </div>
        <div className="contact-container" id="contact">
          <h1>Contact</h1>
          <div className="redes-container">
            <div className="redes">
              <div className="icons">
                <box-icon
                  type="logo"
                  name="linkedin"
                  size="lg"
                  color="#2f5881"
                ></box-icon>
              </div>
              <a href="https://www.linkedin.com/in/juan-da-costa/">Linkedin</a>
            </div>
            <div className="redes">
              <div className="icons">
                <box-icon
                  type="logo"
                  name="github"
                  size="lg"
                  color="#2f5881"
                ></box-icon>
              </div>
              <a href="https://github.com/NachoDaCosta">Github</a>
            </div>
            <div className="redes">
              <div className="icons">
                <box-icon
                  type="logo"
                  name="whatsapp"
                  size="lg"
                  color="#2f5881"
                ></box-icon>
              </div>
              <a href="http://wa.me/+598093853398">WhatsApp</a>
            </div>
            <div className="redes">
              <div className="icons">
                <box-icon
                  type="logo"
                  name="gmail"
                  size="lg"
                  color="#2f5881"
                ></box-icon>
              </div>
              <div>Nacho5981@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </sectio>
  );
};

export default About;
