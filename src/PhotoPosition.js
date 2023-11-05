import React from 'react';
import './PhotoPosition.css'

const PhotoPosition = ({ photo, index, selectPhoto, reorderPhotos }) => {
  const photoClass = `photo ${photo.isFeatured ? 'featured' : ''} ${
    photo.selected ? 'selected' : ''
  } ${index === 0 ? 'first-photo' : ''}`; 

};

export default PhotoPosition;