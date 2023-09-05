import React, { useState } from 'react';

function TextOverlay({ text, index, editTextOverlay }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    editTextOverlay(index, editedText);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <div
      className="text-overlay"
      onDoubleClick={handleDoubleClick}
      onBlur={handleBlur}
    >
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={handleChange}
          autoFocus
          className="editable-text"
        />
      ) : (
        editedText
      )}
    </div>
  );
}

export default TextOverlay;


