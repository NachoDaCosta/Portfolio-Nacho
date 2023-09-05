import React from "react";
import './nav.css'
const Nav=()=>{
    return (
      <nav>
        <div>Juan Da Costa</div>

        <div className="links">
          <a href="#about">About me</a>
          <a href="#contact">Contact</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>
    );
}

export default Nav;