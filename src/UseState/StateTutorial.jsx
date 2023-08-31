import React from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = React.useState(0);

  const handleChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setInputValue(value);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeHolder="Enter Something.."
          onChange={handleChange}
          value={inputValue}
        />
      </div>
    </>
  );
};

export default StateTutorial;
