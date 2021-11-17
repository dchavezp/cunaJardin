import React, { useState } from 'react'
import aboutImage from "../../images/2280 [Convertido].png";
import VizSensor from 'react-visibility-sensor';
export default function AboutSection({ id }) {
    const [imgViz, setimgViz] = useState(false);
    return (
        <div className="about" id={id}>
            <div className="about-content">
                <div className="planet">
                    <VizSensor onChange={(isVisible) => { setimgViz(isVisible) }}>
                        <img src={aboutImage} alt="aboutImage" className="animate__animated animate__pulse animate__slow animate__infinite"></img>
                    </VizSensor>
                </div>
                <div className="textInformation">
                    <h1 className={imgViz ? "animate__animated animate__fadeInRight" : ""}>
                        Acerca de Nuestra Cuna Jardín UNSA
                    </h1>
                    <div className={imgViz ? "animate__animated animate__fadeIn aboutText" : "aboutText"}>
                        Somos una institución que garantiza el buen desarrollo integral del menor de 6 años con la participación permanente de padres de familia, comunidad y aliados.
                        Brindamos un ambiente propicio para el aprendizaje donde los niños y niñas reciben afecto, cuidado integral y un sistema educativo de avanzada desarrollando un modelo de educación básica que contribuya a la construcción de sociedad democrática y con responsabilidad social.
                    </div>
                </div>

            </div>
        </div>
    )
}