import React from 'react'

const TopHeaderItem = ({ iconF, textB, textT }) => {
    return (
        <div className="top-header-item">
            <i className={iconF}></i>
            <div className="thi-Text">
                <span className="thi-Text-top">
                    {textT}
            </span>
                <span className="thi-Text-bottom">
                    {textB}
            </span>
            </div>
        </div>
    )
}

export default TopHeaderItem
