import React from 'react';
import "../css/App.css";

const NumberSelector = ({ selectedNumbers, setSelectedNumbers }) => {

  const handleNumberClick = number => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter(n => n !== number));
    } else if (selectedNumbers.length < 5) {
      setSelectedNumbers([...selectedNumbers, number]);
    } else {
      alert("You can't select more than 5 numbers.");
    }
  };
  const generateButtons = () => {
    let buttons = [];
    for (let i = 1; i <= 20; i++) {
      const isSelected = selectedNumbers.includes(i);
      buttons.push(
        <button
          key={i}
          className={`number-button ${isSelected ? 'selected' : ''}`}
          onClick={() => handleNumberClick(i)} >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="number-grid">
      {generateButtons()}
    </div>
  );
};

export default NumberSelector;
