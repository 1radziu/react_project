import React from 'react';

const ColorChanger = () => {
  const changeColors = () => {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  };

  return (
    <button
      onClick={changeColors}
      style={{
        padding: '10px 20px',
        backgroundColor: 'blue', 
        color: 'white', 
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      Zmień kolor
    </button>
  );
};

export default ColorChanger;
