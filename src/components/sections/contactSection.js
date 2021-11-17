import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import contactImageL from "../../images/4238138@2x.png";
import contactImageR from "../../images/contactR.png";
import { MdEmail } from "react-icons/md";
import VizSensor from 'react-visibility-sensor';


function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_j1uqafu', 'template_4kfks4j', e.target, 'user_Gqf2RYkQgpZ7uZvXZtcBB')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset()
}
export default function ContactSection({ id }) {
    const [divViz, setDivViz] = useState(false);
    return (
        <div className="contact-section" id={id}>
            <VizSensor onChange={(isVisible) => { setDivViz(isVisible) }}>
                <h1>
                    Contáctenos
                </h1>
            </VizSensor>
            <form className={divViz?"animate__animated animate__zoomIn contact-form":"contact-form"} onSubmit={sendEmail}>
                <div className="text-input-form">
                    <input type="text" name="user_name" placeholder="Nombre" required />
                </div>
                <div className="text-input-form">
                    <label><MdEmail /></label>
                    <input type="email" name="user_email" placeholder="Correo" required />
                </div>
                <div className="text-area-form">
                    <textarea name="message" placeholder="Mensaje" />
                </div>
                <input type="submit" value="Enviar" className="button-form" required />
            </form>
            <img src={contactImageL} alt="contactL" className={divViz?"animate__animated animate__rotateInUpLeft image-left":"image-left"}></img>
            <img src={contactImageR} alt="contactR" className={divViz?"animate__animated animate__rotateInDownRight image-right":"image-right"}></img>
        </div>
    )
}