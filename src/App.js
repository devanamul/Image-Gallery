import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PhotoPosition from './PhotoPosition';
import { ImageFill } from 'react-bootstrap-icons';

const images = [
  { id: 1, src: 'image-1.webp', alt: 'Image 1' },
  { id: 2, src: 'image-2.webp', alt: 'Image 2' },
  { id: 3, src: 'image-3.webp', alt: 'Image 3' },
  { id: 4, src: 'image-4.webp', alt: 'Image 4' },
  { id: 5, src: 'image-5.webp', alt: 'Image 5' },
  { id: 6, src: 'image-6.webp', alt: 'Image 6' },
  { id: 7, src: 'image-7.webp', alt: 'Image 7' },
  { id: 8, src: 'image-8.webp', alt: 'Image 8' },
  { id: 9, src: 'image-9.webp', alt: 'Image 9' },
  { id: 10, src: 'image-10.jpeg', alt: 'Image 10' },
  { id: 11, src: 'image-11.jpeg', alt: 'Image 11' },
];

function App() {
  const [photos, setPhotos] = useState(images);
  const selectedPhotos = photos.filter((photo) => photo.selected);
  
  const selectPhoto = (id) => {
    const updatedPhotos = photos.map((photo) =>
      photo.id === id ? { ...photo, selected: !photo.selected } : photo
    );
    setPhotos(updatedPhotos);
  };

  const deleteSelectedPhotos = () => {
    const updatedPhotos = photos.filter((photo) => !photo.selected);
    setPhotos(updatedPhotos);
  };

  const reorderPhotos = (dragIndex, hoverIndex) => {
    const draggedPhoto = photos[dragIndex];
    const updatedPhotos = [...photos];
    updatedPhotos.splice(dragIndex, 1);
    updatedPhotos.splice(hoverIndex, 0, draggedPhoto);
    setPhotos(updatedPhotos);
  };

  return (
    <div className="container mt-4 mx-auto rounded">
      <div className='topBar'>
        {selectedPhotos.length > 0 ? (
          <div className="topBar">
            <h4 className="text-left">
                {selectedPhotos.length === 1
              ? `${selectedPhotos.length} Photo Selected`
              : `${selectedPhotos.length} Photos Selected`}
            </h4>
            <button
              className="btn btn-danger"
              onClick={deleteSelectedPhotos}
            >
              {selectedPhotos.length === 1 ? "Delete Selected Photo" : "Delete Selected Photos"}
            </button>
          </div>
        ) : (
          <h4 className="text-left">Gallery</h4>
        )}
      </div>
      <hr style={{ border: "1px solid #000", width : '100%'}} />


          <div className="grid">
            {photos.map((photo, index) => (
              <PhotoPosition
                key={photo.id}
                photo={photo}
                index={index}
                selectPhoto={selectPhoto}
                reorderPhotos={reorderPhotos}
              />
            ))}
            <div className="add-photo">
            <ImageFill size={20} /> Add Images
            </div>
          </div>
      
    </div>
  );
}

export default App;
