import { useState } from "react";

function StateExample() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1)
  }

  const decrease = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <button onClick={increase}>increase</button>
      {counter}
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default StateExample;
