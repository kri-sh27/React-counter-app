import React, {useState} from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(0);
  const incrementCount=()=>{
    setCount(count+1);
  };
  return (
   <div className="App">
    <h1>Counter App</h1>
    <p>Count:{count}</p>
    <button onClick={incrementCount}>INcrement</button>
   </div>
  );
}

export default App;
