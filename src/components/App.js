import React, { useState } from 'react';
import '../css/App.css';
import Header from './Header';
import MoneySelector from './MoneySelector';
import NumberSelector from './NumberSelector';
import ControlButtons from './ControlButtons';
import TotalDisplay from './TotalDisplay';
import floatingBallsImage from '../floating-balls-no-padding.png';

const App = () => {
  const [selectedNumbers, setSelectedNumbers]=useState([]);
  const [totalMoney, setTotalMoney] = useState(0);

  const handleAssignMoney = (value) => {
    if (selectedNumbers.length === 5) {
      setTotalMoney(totalMoney + value);
    } else {
      alert("You must select exactly 5 numbers before assigning money.");
    }
  };

  const handleClear = () => {
    setSelectedNumbers([]);
    setTotalMoney(0);
  };

  const generateRandomNumbers = () => {
    const randomNumbers = new Set();
    while (randomNumbers.size < 5) {
        const randomNumber = Math.floor(Math.random() * 20) + 1;
        randomNumbers.add(randomNumber);
      }
      setSelectedNumbers([...randomNumbers]);
  };

  const handleCash = () => {
    if (selectedNumbers.length === 5) {
      alert(`Numbers selected: ${selectedNumbers.join(', ')}\nTotal Money: $${totalMoney.toFixed(2)}`);
    } else {
      alert(`You must select exactly 5 numbers before proceeding.`);
    }
  };

  return (
    <div>
      <Header/>
      <main className="main-content">
        <div>
        <img src={floatingBallsImage} alt="Floating Balls" className="money-image"/> 
        <MoneySelector assignMoney={handleAssignMoney}/>
        </div>
        <div className="number-and-action">
          <NumberSelector selectedNumbers={selectedNumbers} setSelectedNumbers={setSelectedNumbers} />
          <ControlButtons clear={handleClear} generateRandomNumbers={generateRandomNumbers} cash={handleCash}/>
        </div>
        <TotalDisplay selectedNumbers={selectedNumbers} totalMoney={totalMoney}/>
      </main>      
    </div>
  )
}

export default App;

