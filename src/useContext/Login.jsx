import { useContext } from "react";
import { AppContext } from "./ContextExample";

function login() {
  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <input onChange={(e) => setUsername(e.target.value)} />
    </div>
  );
}

export default login;
