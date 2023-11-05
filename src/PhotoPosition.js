import React from 'react';
import './PhotoPosition.css'

const PhotoPosition = ({ photo, index, selectPhoto, reorderPhotos }) => {
  const photoClass = `photo ${photo.isFeatured ? 'featured' : ''} ${
    photo.selected ? 'selected' : ''
  } ${index === 0 ? 'first-photo' : ''}`; 

  return (
    <div
      className={photoClass}
      draggable
      onDrag={(e) => e.preventDefault()}
      onDragStart={(e) => e.dataTransfer.setData('text/plain', index)}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        e.preventDefault();
        const dragIndex = e.dataTransfer.getData('text/plain');
        if (dragIndex !== index) {
          reorderPhotos(parseInt(dragIndex), index);
        }
      }}
    >
      <img
        src={`/images/${photo.src}`}
        alt={`Photo ${photo.id}`}
        onClick={() => selectPhoto(photo.id)}
      />
      <div className="overlay" onClick={() => selectPhoto(photo.id)}></div>
    </div>
  );

};

export default PhotoPosition;