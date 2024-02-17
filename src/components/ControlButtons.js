import React from "react"
import "../css/App.css";
const ControlButtons = ({clear, generateRandomNumbers, cash}) => {
  return (
    <div className="action-buttons">
      <button className="action-button" onClick={cash}>Cash</button>
      <button className="action-button" onClick={clear}>Clear</button>
      <button className="action-button" onClick={generateRandomNumbers}>Random</button>
    </div>
  )
}

export default ControlButtons;
