import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextOverlay from './TextOverlay';
import './App.css'; // Import your CSS file

function ImageContainer() {
  const [imageURL, setImageURL] = useState('');
  const [textOverlays, setTextOverlays] = useState([]);

  const fetchRandomImage = async () => {
    try {
      const response = await axios.get(
        'https://api.unsplash.com/photos/random?client_id=7zAMfLUYSrXCJNYs0DsHN3f9jboUr4shkme09w-0q_M'
      );
      setImageURL(response.data.urls.regular);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const editTextOverlay = (index, newText) => {
    const updatedTextOverlays = [...textOverlays];
    updatedTextOverlays[index] = newText;
    setTextOverlays(updatedTextOverlays);
  };

  return (
    <div className="image-container">
      <button onClick={fetchRandomImage}>Fetch Image</button>
      {imageURL && <img src={imageURL} alt="Fetched" className="image" />}

      {textOverlays.map((text, index) => (
        <TextOverlay
          key={index}
          text={text}
          index={index}
          editTextOverlay={editTextOverlay}
        />
      ))}
    </div>
  );
}

export default ImageContainer;
