import React, { useState } from 'react'
import mTeamImage from "../../images/Grupo 13@2x.png";
import VizSensor from 'react-visibility-sensor';
export default function MTeamSection({ id }) {
    const [divViz, setDivViz] = useState(false);
    return (
        <div className="m-team" id={id}>
            <div className="barSpace" />
            <VizSensor onChange={(isVisible) => { setDivViz(isVisible) }}>
                <h1>
                    Nuestro Equipo Multidiscplinario
            </h1>
            </VizSensor>
            <div className="m-team-content">
                <img src={mTeamImage} alt="mTeamImage" className={divViz?"animate__animated animate__flipInX":""}></img>
                <div className={divViz?"animate__animated animate__flipInX m-team-text":"m-team-text"}>
                    Con nuestro equipo multidisciplinario tendrá todo el apoyo y orientación para el desarrollo óptimo e integral de su niño. 
                </div>
            </div>
        </div>
    )
}