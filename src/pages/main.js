import React from 'react'
import AboutSection from '../components/sections/aboutSection'
import ContactSection from '../components/sections/contactSection'
import GallerySection from '../components/sections/gallerySection'
import HeroSection from '../components/sections/heroSection'
import MTeamSection from '../components/sections/mteamSection'
import TeachersSection from '../components/sections/TeacherSection/teachersSection'

function MainPage() {
    return (
        <div className = "main">
            <div className="space"></div>
            <HeroSection id="hero"/>
            <AboutSection id="about"/>
            <TeachersSection id="teachers"/>
            <MTeamSection id="mteam"/>
            <GallerySection id="gallery"/>
            <ContactSection id="contact"/>
        </div>
    )
}

export default MainPage
