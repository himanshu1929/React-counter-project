import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  // let counter = 6;

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(Math.max(0, counter - 1));
  };

  return (
    <>
      <h1>Counter Project</h1>
      <h3>Counter is {counter}</h3>
      <button onClick={addValue} id='#increment'>
        Increment
      </button>
      <button onClick={removeValue} id='#decrement'>
        Decrement
      </button>
    </>
  );
}

export default App;
