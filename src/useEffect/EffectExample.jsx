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
