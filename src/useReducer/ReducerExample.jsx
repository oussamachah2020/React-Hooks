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
          dispatch({ type: "INCREMENT" })
          dispatch({ type: "TOGGLE_TEXT" })
        }}
      >
        click here
      </button>
      {state.showText && <p>This is a text</p>}
    </div>
  );
}

export default ReducerExample;
