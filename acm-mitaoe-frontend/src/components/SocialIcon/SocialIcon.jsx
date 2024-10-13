import React from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './SocialIcon.css';

const SocialIcon = ({ icon, link, name, colorCode }) => {
  return (
    <div className='social-container'>
      <a className="icon-div" href={link} aria-label={`Visit our ${name} page`}>
        <img src={icon} alt={name} />
      </a>
      <p>
        <span style={{ color: `${colorCode}`, fontSize: "1rem", fontWeight: "500" }}>{name}</span>
        <a href={link} style={{ color: `${colorCode}`, fontSize: "1rem", fontWeight: "500" }}>
          <OpenInNewIcon />
        </a>
      </p>
    </div>
  )
}

export default SocialIcon;
