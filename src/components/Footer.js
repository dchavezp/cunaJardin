import React from 'react'
import cunalogo from "../images/Logo Cuna2.png";
import unsalogo from "../images/LOGO_UNSA.png";
import { RiFacebookCircleFill } from "react-icons/ri";
import { SiWhatsapp } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import Link from '@material-ui/core/Link';
export const Footer = () => {
    return (
        <div className="footer">
            <img src={cunalogo} alt="Logo" className="logo-cuna">
            </img>
            <div className="footer-items">
                <div className="footer-item">
                    <span>Correo</span>
                    <span><SiGmail /> cuna_jardín@unsa.edu.pe</span>
                </div>
                <div className="footer-item">
                    <span>Teléfonos</span>
                    <span><SiWhatsapp /> 940236606 - 978635224</span>
                </div>
                <div className="footer-item">
                    <span>Redes Sociales</span>
                    <span>
                        <Link href="https://www.facebook.com/IEI-Cuna-Jardin-UNSA-100359078377156">
                            <RiFacebookCircleFill />
                        </Link>
                    </span>
                </div>
            </div>
            <img src={unsalogo} alt="Logo" className="logo-unsa">
            </img>
        </div>
    )
}
