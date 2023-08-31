import React, { useEffect, useState } from "react";
import axios from "axios";
function EffectTutorial() {
  const [data, setData] = React.useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setData(response.data);
      console.log(data);
    }
    getData();
  }, [count]);
  return (
    <>
      <div>Hello World</div>
      <h1>{count}</h1>
      <h1>{data[count].email}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Increment
      </button>
    </>
  );
}
export default EffectTutorial;
