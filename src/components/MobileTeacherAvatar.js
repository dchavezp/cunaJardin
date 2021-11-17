import React from 'react'
import { Avatar } from 'antd';
const TeacherCart = ({ path, name, description }) => {
    return (
        <div className="mobile-avatar">
            <Avatar size={100} src={path} />
            <div className="content">
                <span className="avatar-name">{name}</span>
                <span className="avatar-description">{description}</span>
            </div>
        </div>
    )
}

export default TeacherCart;