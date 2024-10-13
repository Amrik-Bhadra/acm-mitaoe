import React from 'react';
import './HomeAboutImage.css';

const HomeAboutImage = ({ image, imageName, description }) => {
  return (
    <div className='image-container'>
      <img src={image} alt={imageName} />
      <div className='description'>{description}</div>
    </div>
  );
};

export default HomeAboutImage;
