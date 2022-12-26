import { useRef } from "react";

function RefExample() {
  const inputRef = useRef(null);

  const refClick = () => {
    inputRef.current.value = ""
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={refClick}>text</button>
    </div>
  );
}

export default RefExample;
