import React, { useState } from 'react'
import { Drawer } from 'antd';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as LinkS } from "react-scroll";
import cunalogo from "../images/Logo Cuna2.png";
import unsalogo from "../images/LOGO_UNSA.png";
import { ReactComponent as HomeIcon } from "../images/house.svg";
import { ReactComponent as AboutIcon } from '../images/colegio.svg';
import { ReactComponent as TeacherIcon } from '../images/teacher.svg';
import { ReactComponent as TeamUpIcon } from '../images/unido.svg';
import { ReactComponent as GalleryIcon } from '../images/galeria-de-imagenes.svg';
import { ReactComponent as ContactUsIcon } from '../images/auriculares.svg';
import TopHeaderItem from './TopHeaderItem';
function Navbar() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="header" id="navbar">
      <div className="topbar">
        <div className="header-logo">
          <img src={cunalogo} alt="Logo">
          </img>
        </div>
        <div className="mobileVisible">
            <IconButton className="menu-button" color="secondary" aria-label="add an alarm" onClick={showDrawer}>
              <MenuIcon />
            </IconButton>
          </div>
        <div className="top-header-items">
          <TopHeaderItem
            iconF="fas fa-phone-alt"
            textT="Llámanos al"
            textB="940236606 - 978635224"
          />
          <TopHeaderItem
            iconF="far fa-clock"
            textT="Horario de atención"
            textB="8:00 am - 3:45 pm"
          />
          <TopHeaderItem
            iconF="fas fa-map-marker-alt"
            textT="Ubícanos en"
            textB="Calle 1 S/N - Urb. Aurora"
          />
        </div>
        <div className="header-logoUnsa">
          <img src={unsalogo} alt="Logo">
          </img>
        </div>
      </div>
      <div className="mobileVisible">
        <Drawer
          placement="left"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <ul className="nav-links">
            <li className="nav-link">
              <LinkS
                activeClass="active"
                to="hero"
                spy={true}
                smooth={'easeOutQuart'}
                offset={-180}
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
                offset={-180}
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
                offset={-180}
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
                offset={-180}
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
                offset={-180}
                duration={800}
              >
                <GalleryIcon />
              Galeria
              </LinkS>
            </li>
            <li className="nav-link">
              <LinkS
                activeClass="active"
                to="contact"
                spy={true}
                smooth={'easeOutQuart'}
                offset={-180}
                duration={800}
              >
                <ContactUsIcon />
              Contáctenos
              </LinkS>
            </li>
          </ul>
        </Drawer>
      </div>
    </div>
  );
}

export default Navbar
