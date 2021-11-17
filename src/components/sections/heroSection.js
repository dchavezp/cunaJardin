import React, { useState } from 'react'
import VizSensor from 'react-visibility-sensor';
import Video from '../../assets/videos/Education - 35445.mp4'
export default function HeroSection({ id }) {
    const [h1Viz, seth1Viz] = useState(false);
    return (
        <>
            <div className="hero" id={id}>
                <div className="video-container">
                    <video autoPlay muted loop>
                        <source src={Video} type={'video/mp4'}>
                        </source>
                    </video>
                </div>
                <div className="hero-Content">
                    <span className="textH2 ">Bienvenidos a nuestra Cuna Jardín UNSA</span>
                    <VizSensor onChange={(isVisible) => { seth1Viz(isVisible) }}>
                        <span className={h1Viz ? "textH1 animate__animated animate__zoomInUp" : "textH1"}>Educación  de calidad</span>
                    </VizSensor>
                    <span className={h1Viz ? "textH1 animate__animated animate__zoomInUp" : "textH1"}>y</span>
                    <span className={h1Viz ? "textH1 animate__animated animate__zoomInUp" : "textH1"}>excelencia hacia el desarrollo integral del niño</span>
                    <span className="textH3">Institución acreditada comprometida a</span>
                    <span className="textH3"> desarrollar prácticas pedógicas oportunas</span>
                </div>
            </div>
        </>
    )
}

