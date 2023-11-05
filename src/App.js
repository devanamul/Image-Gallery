import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
