import React from "react";
import './projects.css';

const Projects=()=>{
    return(
        <>
            <div className="projects-container">
                <h1>Projects</h1>
                <div className="chapter-div">
                    <span>Chapter 1</span>
                </div>
            </div>
            <div className="pr1">
                <div className="pokedex-container">
                    <h1>Pokedex</h1>
                    <div className="pokedex-text">
                        Pokédex, en el mundo Pokémon es 
                        una enciclopedia virtual portátil
                        de alta tecnología que los 
                        entrenadores Pokémon llevan 
                        consigo para registrar las fichas
                        de todas las diversas especies Pokémon con las que se 
                        encuentran durante su viaje como entrenadores. 
                        
                    </div>
                </div>  
            </div>
        </>
    )
}

export default Projects;