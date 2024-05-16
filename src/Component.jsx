import { useState } from "react";

export default function Component() {
  const [inputValue, setInputValue] = useState("");
  const [inputUpdatedValue, setInputUpdatedValue] = useState("");

  const handleInputOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonOnClick = () => {
    setInputUpdatedValue(inputValue);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputOnChange} />
      <button onClick={handleButtonOnClick}>Update value</button>
      <p>Initial value: {inputValue}</p>
      <p></p>
      <p>Updated value: {inputUpdatedValue}</p>
    </div>
  );
}
