import { useState } from "react";
import "./App.css";

function App() {
  let updates
  const [count, setCount] = useState(0);
  const [Nextcount, setNextCount] = useState(count+1);

  function increase(e) {
    if (count < 20){
      setCount(count + 1);
      setNextCount(Nextcount + 1);
    }
    console.log(e.target.id)

  }
  function decrease(e) {
    if (count > 0){
      setCount(count - 1);
      setNextCount(Nextcount - 1);
    }
    console.log(e.target.id)
  }
  return (
    <>
      <h2>Hi, it's my counter app</h2>
      <h3>Currently counter is {count}</h3>
      <button id="increase" onClick={increase}>Increase counter</button>
      <button id="decrease" onClick={decrease}>Decrease counter</button>
      <p>Next updates may be: {Nextcount}</p>
    </>
  );
}

export default App;
