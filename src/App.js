import React, { Component } from 'react';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import "./App.css"
import 'antd/dist/antd.css';
import MainPage from './pages/main';
import { Link as LinkS } from "react-scroll";
import { ReactComponent as HomeIcon } from "./images/house.svg";
import { ReactComponent as AboutIcon } from './images/colegio.svg';
import { ReactComponent as TeacherIcon } from './images/teacher.svg';
import { ReactComponent as TeamUpIcon } from './images/unido.svg';
import { ReactComponent as GalleryIcon } from './images/galeria-de-imagenes.svg';
import { ReactComponent as ContactUsIcon } from './images/auriculares.svg';
import { Footer } from './components/Footer';
const { Header, Content } = Layout;

class App extends Component {
    render() {
        return (
            <Layout className="mainLayout">
                <Header>
                    <Navbar />
                </Header>
                <div className="mobileHidden">
                    <ul className="nav-links">
                        <li className="nav-link">
                            <LinkS
                                activeClass="active"
                                to="hero"
                                spy={true}
                                smooth={'easeOutQuart'}
                                offset={-110}
                                duration={800}
                            >
                                <HomeIcon />
                                Inicio
                            </LinkS>
                        </li>
                        <li className="nav-link">
                            <LinkS
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={'easeOutQuart'}
                                offset={-110}
                                duration={800}
                            >
                                <AboutIcon />
                                Nuestra Institución
                            </LinkS>
                        </li>
                        <li className="nav-link">
                            <LinkS
                                activeClass="active"
                                to="teachers"
                                spy={true}
                                smooth={'easeOutQuart'}
                                offset={-110}
                                duration={800}
                            >
                                <TeacherIcon />
                                Docentes
                            </LinkS>
                        </li>
                        <li className="nav-link">
                            <LinkS
                                activeClass="active"
                                to="mteam"
                                spy={true}
                                smooth={'easeOutQuart'}
                                offset={-110}
                                duration={800}
                            >
                                <TeamUpIcon />
                                Equipo Multidisplinario
                            </LinkS>
                        </li>
                        <li className="nav-link">
                            <LinkS
                                activeClass="active"
                                to="gallery"
                                spy={true}
                                smooth={'easeOutQuart'}
                                offset={-110}
                                duration={800}
                            >
                                <GalleryIcon />
                                Galería
                            </LinkS>
                        </li>
                        <li className="nav-link">
                            <LinkS
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={'easeOutQuart'}
                                offset={-110}
                                duration={800}
                            >
                                <ContactUsIcon />
                                Contáctenos
                            </LinkS>
                        </li>
                    </ul>
                </div>
                <Content>
                    <MainPage />
                </Content>
                <Footer />
            </Layout>
        )
    }
}
export default App