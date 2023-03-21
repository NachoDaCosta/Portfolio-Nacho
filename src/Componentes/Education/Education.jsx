import React from "react";
import './education.css'

const Education=()=>{
    return(
        <div className="education-container">
            
                <div className="text-skills">Skills</div>
                <div className="skills-img">
                    <div className="skills-mini-container">
                        <img alt="" src="./imagenes/css.png"/>
                        <span>Css</span>
                    </div>

                    <div className="skills-mini-container">
                        <img alt="" src="./imagenes/html.png"/>
                        <span>Css</span>
                    </div>

                    <div className="skills-mini-container">
                        <img alt="" src="./imagenes/js.png"/>
                        <span>Javascript</span>
                    </div>

                    <div className="skills-mini-container">
                        <img alt="" src="./imagenes/react.png"/>
                        <span>React</span>
                    </div>

                    <div className="skills-mini-container">
                        <img alt="" src="./imagenes/node.png"/>
                        <span>NodeJs</span>
                    </div>

                    <div className="skills-mini-container">
                        <img alt="" src="./imagenes/postgres.png"/>
                        <span>PostgreSQL</span>
                    </div>

                </div>
        </div>
    )
}

export default Education;