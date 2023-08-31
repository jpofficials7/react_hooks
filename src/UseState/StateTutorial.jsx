import React from "react";

const StateTutorial = () => {
  const [count, setCount] = React.useState(0);
  const countUpdate = (event) => {
    const { name } = event.target;
    setCount((prevCount) =>
      name === "Increment" ? prevCount + 1 : prevCount - 1
    );
  };
  return (
    <>
      <div>
        <span>
          <button name="increment" onClick={countUpdate}>
            Increment
          </button>
        </span>
        <span>{" " + count + " "}</span>
        <span>
          <button name="decrement" onClick={countUpdate}>
            Decrement
          </button>
        </span>
      </div>
    </>
  );
};

export default StateTutorial;
