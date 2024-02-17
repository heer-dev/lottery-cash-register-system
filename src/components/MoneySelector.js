import React from "react"
import "../css/App.css";

const MoneySelector = ({ assignMoney }) => {
  return (
    <div className="money-grid">
      <button className="money-button" onClick={() => assignMoney(1)}>$1</button>
      <button className="money-button" onClick={() => assignMoney(5)}>$5</button>
      <button className="money-button" onClick={() => assignMoney(10)}>$10</button>
      <button className="money-button" onClick={() => assignMoney(20)}>$20</button>
    </div>
  );
};

export default MoneySelector;
