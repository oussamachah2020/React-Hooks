# React-Hooks

> this repos contains a few react hooks examples to just show the basic of how each hooks works we got

## useState:

```react-javascript
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

export default StateExample
```

## useEffect

```react-javascript
import { useEffect, useState } from "react";
import axios from "axios";

function EffectExample() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        const user = response.data;
        console.log(user.results[0].email);
        setData(user.results[0].email);
      })
      .catch((err) => console.error(err));
  }, []);

  return <div>{data}</div>;
}

export default EffectExample;

```

> Those Examples are simple so the idea can be clearer on how each hook work
