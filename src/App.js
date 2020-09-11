import React, { useState } from 'react';
import './App.css';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';

function App() {
  const [userName1, setUserName1] = useState('Ahtazaz');
  const [userName2, setUserName2] = useState('Ahmed');
  const [userName3, setUserName3] = useState('Khan');
  const inputEventHandler1 = (event) => {
    setUserName1(event.target.value);
  };
  const inputEventHandler2 = (event) => {
    setUserName2(event.target.value);
  };
  const inputEventHandler3 = (event) => {
    setUserName3(event.target.value);
  };
  return (
    <div className="App">
      <UserOutput userName={userName1}/>
      <UserInput eventHandler={inputEventHandler1} userName={userName1}/>
      <UserOutput userName={userName2}/>
      <UserInput eventHandler={inputEventHandler2} userName={userName2}/>
      <UserOutput userName={userName3}/>
      <UserInput eventHandler={inputEventHandler3} userName={userName3}/>
    </div>
  );
}

export default App;
