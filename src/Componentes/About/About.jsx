import React from "react";
import './about.css'
import 'boxicons'

const About =()=>{
    return(
        <section>
            <div className="image-column-container">
                <div className="fondo-yo">
                    <img alt="" src="./imagenes/yo.png" className="yo-image"/>
                </div>
                <div className="profile-text"> 
                Profile
                </div>
            </div>

            {/*Segunda columna */}
            <div className="about-container">
                <div className="about-text">
                    <h1>About</h1>
                    <p>
                        Hello, my name is Juan Ignacio but you can call me nacho.
                        I am 21 years old and I am a Computer Engineering student and I really want to develop myself as a professional in the field of web development.
                        I have knowledge in: React, Node, Html, Css and PostgreSQL
                    </p>
                </div>
                <div className="contact-container">
                    <h1>Contact</h1>
                    <div className="redes-container">
                        <div className="redes">
                            <div className="icons" >
                                <box-icon type='logo' name='linkedin' size="lg" color="#2f5881"></box-icon>
                            </div>
                            <div>Linkedin</div>
                        </div>
                        <div className="redes">
                            <div className="icons" >
                                <box-icon type='logo' name='github' size="lg" color="#2f5881"></box-icon>
                            </div>
                            <div>Github</div>
                        </div>
                        <div className="redes">
                            <div className="icons" >
                                <box-icon type='logo' name='whatsapp' size="lg" color="#2f5881"></box-icon>
                            </div>
                            <div>WhatsApp</div>
                        </div>
                        <div className="redes">
                            <div className="icons" >
                                <box-icon type='logo' name='gmail' size="lg" color="#2f5881"></box-icon>
                            </div>
                            <div>Nacho5981@gmail.com</div>
                        </div>

                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default About;