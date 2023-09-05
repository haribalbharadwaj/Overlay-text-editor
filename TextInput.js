import React, { useState } from 'react';

function TextOverlay({ text, index, editTextOverlay }) {
  const [editedText, setEditedText] = useState(text);

  const handleTextChange = (e) => {
    setEditedText(e.target.innerText);
  };

  const handleBlur = () => {
    editTextOverlay(index, editedText);
  };

  return (
    <div
      className="text-overlay"
      style={{
        top: '50px', // Set your desired position
        left: '50px', // Set your desired position
      }}
      contentEditable={true}
      onInput={handleTextChange}
      onBlur={handleBlur}
    >
      {editedText}
    </div>
  );
}

export default TextOverlay;

