import React from "react";
import './projects.css';
import Mercado from "./MercadoLibre/Mercado";

const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <h1>Projects</h1>
        <div className="chapter-div">
          <span>Chapter 1</span>
        </div>
      </div>
      <div className="pokedex">
        <div className="images-pokedex">
          <div className="gap-imagenes">
            <img alt="" src="/imagenes/pokedex/1.png" />
            <img alt="" src="/imagenes/pokedex/2.png" />
          </div>
          <div className="gap-imagenes">
            <img alt="" src="/imagenes/pokedex/3.png" />
            <img alt="" src="/imagenes/pokedex/4.png" />
          </div>
        </div>
        <div className="pokedex-container">
          <h1>Pokedex</h1>
          <div className="pokedex-text">
            Pokédex, in the world of Pokémon is a high-tech, portable virtual
            encyclopedia that Pokémon trainers carry with them to record the
            tokens of all the various Pokémon species they encounter during
            their training journey.
          </div>
        </div>
      </div>
      <Mercado />
    </>
  );
};

export default Projects;