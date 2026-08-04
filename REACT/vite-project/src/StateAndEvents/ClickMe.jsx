import { useState } from "react";

function ClickMe() {
  const [n, setN] = useState(0);
  const increment = () => {
    const newN = n + 1;
    setN(newN);
  };
  const decrement = () => {
    const newN = n - 1;
    setN(newN);
  };
  const spoil = () => {
    const newN = "Cats And Dogs";
    setN(newN);
  };
  const reset = () => {
    const newN = 0;
    setN(newN);
  };
  return (
    <div>
      <h4>Clicked {n}</h4>
      <div>
        <button onClick={increment}>Increment</button>
       
        <button onClick={decrement}>Decrement</button>
        <button onClick={spoil}>Spoil</button>
        
        <button onClick={reset}>Reset</button>
              <h4>Clicked {n}</h4>

      </div>
          <h4>Clicked {n}</h4>
  
    </div>
  );
}
export default ClickMe;
