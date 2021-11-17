import React, { useState } from 'react'
import TeacherCart from '../../TeacherCart';
import MobileTeacherAvatar from '../../MobileTeacherAvatar';
import VizSensor from 'react-visibility-sensor';
import TeacherImages from './TeacherImages'
const data = TeacherImages;
const listAvatars = data.map((item) =>
    <div key={item.id}>
        <MobileTeacherAvatar path={item.path} name={item.name} description={item.description} />
    </div>
);
const listCards = data.map((item) =>
    <div key={item.id} className="teacher-card">
        <TeacherCart path={item.path} name={item.name} description={item.description} />
    </div>
);

export default function TeachersSection({ id }) {
    const [divViz, setDivViz] = useState(false);
    return (
        <div className="teachers-section" id={id}>

            <div className="barSpace" />
            <VizSensor onChange={(isVisible) => { setDivViz(isVisible) }}>
                <h1>
                    Conozcan a nuestras maestras
                </h1>
            </VizSensor>
            <div className={divViz ? "animate__animated animate__zoomIn animate__slow teachers-cards" : "teachers-cards"}>
                {listCards}
            </div>
            <div className={divViz ? "animate__animated animate__zoomIn animate__slow mobile-avatars" : "mobile-avatars"}>
                {listAvatars}
            </div>

        </div>
    )
}