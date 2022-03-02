import React, {useState} from 'react';
import './App.css';

var colorTheme = [
  "green","blue","red","purple"
]


function App() {
  const [state, setState] = useState(1);
  const [theme, setTheme] = useState('blue')

  function changeTheme() {
    
    setTheme(colorTheme[Math.floor(Math.random()*colorTheme.length)]);

  }

  function decrementCount() {
    setState(prevState => prevState - 1);
    changeTheme();
  }

  function incrementCount() {
    setState(prevState => prevState + 1);
    changeTheme();
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{state}</span>
      <span>{theme}</span>

      <button onClick={incrementCount}>+</button>

    </>

  );
}

export default App;
