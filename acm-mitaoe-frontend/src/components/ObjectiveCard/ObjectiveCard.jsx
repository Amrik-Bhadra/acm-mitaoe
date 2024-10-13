import React from 'react'
import './ObjectiveCard.css'

const ObjectiveCard = ({title, description, icon}) => {
  return (
    <div className='objective-card'>
        <main className="content-box">
            <h2>{title}</h2>
            <p>{description}</p>
        </main>
        <div className="objective-icon-box">
            <img src={icon} alt="" />
        </div>
    </div>
  )
}

export default ObjectiveCard