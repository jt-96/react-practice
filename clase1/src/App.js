import './App.css';
import Header from './components/global/Header';

//import React, { useState } from 'react'

function App() {

  /* const [count, setCount] = useState(0)

  const handleClick = (e, sum) => {
    e.preventDefault();
    setCount(count + (sum ? 1 : -1))
  }

  return (
    <div>
      <button className="duplicated-class" onClick={(e) => handleClick(e, true)}>+1</button>
      <button className="duplicated-class" onClick={(e) => handleClick(e, false)}>-1</button>
      <p>Contador Inicial: {count}</p>
    </div>
  ); */
  return(
    <Header/>
  );
}

export default App;
