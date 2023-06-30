import React, { useState } from 'react';

const ButtonToggle = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const getButtonStyle = (buttonId) => {
    if (buttonId === activeButton) {
      return {
        backgroundColor: 'black',
        color: 'white',
      };
    }
    return {};
  };

  return (
    <div>
      <button
        onClick={() => handleClick(1)}
        style={getButtonStyle(1)}
      >
        Button 1
      </button>
      <button
        onClick={() => handleClick(2)}
        style={getButtonStyle(2)}
      >
        Button 2
      </button>
      <button
        onClick={() => handleClick(3)}
        style={getButtonStyle(3)}
      >
        Button 3
      </button>
    </div>
  );
};

export default ButtonToggle;
