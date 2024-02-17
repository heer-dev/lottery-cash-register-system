import React from "react";
import "../css/App.css";

const TotalDisplay = ({ selectedNumbers, totalMoney }) => { 
  return (
    <div className="selected-numbers">
      <h2>Numbers Selected:</h2>
      {selectedNumbers && selectedNumbers.map((number, index) => ( 
        <p key={index}>Mark: {number}</p>
      ))}
      <p>Total Money: ${totalMoney.toFixed(2)}</p>
    </div>
    
  );
};

export default TotalDisplay;
