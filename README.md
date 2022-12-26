# React-Hooks

> this repos contains a few react hooks examples to just show the basic of how each hooks works we got

## useState:

```javascript
import { useState } from "react";

function StateExample() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <button onClick={increase}>increase</button>
      {counter}
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default StateExample;
```

## useEffect

```javascript
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

## useRef

> it does a similar job as useState

```javascript
import { useRef } from "react";

function RefExample() {
  const inputRef = useRef(null);

  const refClick = () => {
    inputRef.current.value = "";
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={refClick}>text</button>
    </div>
  );
}

export default RefExample;
```

## useReducer

> it helps to control the state and action of the data in the app

```javascript
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "TOGGLE_TEXT":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

function ReducerExample() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "TOGGLE_TEXT" });
        }}
      >
        click here
      </button>
      {state.showText && <p>This is a text</p>}
    </div>
  );
}

export default ReducerExample;
```
### Browse the repo files to find more 

> Those Examples are simple so the idea can be clearer on how each hook work
