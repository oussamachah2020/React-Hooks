import { useContext } from "react";
import { AppContext } from "./ContextExample";

function user() {
  const {username} = useContext(AppContext)
  return <div>User: {username}</div>;
}

export default user;
