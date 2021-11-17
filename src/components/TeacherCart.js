import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

const TeacherCart = ({path, name, description }) => {
    return (
            <Card
                hoverable
                style={{ width: 350, borderRadius: 35, margin:36, boxShadow:"rgba(0,0,0,0.3)"}}
                cover={<img alt={name} src={path} />}
                
            >
                <Meta title={name} description={description} />
            </Card>
    )
}

export default TeacherCart
