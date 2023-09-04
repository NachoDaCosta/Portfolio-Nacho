import React from "react";
import './projects.css';
import Mercado from "./MercadoLibre/Mercado";
import Pokedex from "./Pokedex/Pokedex";
import Tasklist from "./Tasklist/Tasklist";
const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <h1>Projects</h1>
        <div className="chapter-div">
          <span>Chapter 1</span>
        </div>
      </div>
      <Pokedex />
      <Mercado />
      <Tasklist />
    </>
  );
};

export default Projects;