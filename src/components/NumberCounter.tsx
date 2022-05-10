import { useState } from "react";
import "./styles.css";
export const NumberCounter = () => {
  const maxNumber: number = 5;
  const minNumber: number = -5;
  const [number, setNumber] = useState(0);
  const handlePlus = () => {
    setNumber(number + 1);
  };
  const handleMinus = () => {
    setNumber(number - 1);
  };

  return (
    <div className="numberCounter">
      <button className="button" onClick={handlePlus} disabled={number === maxNumber ? true : false}>
        +
      </button>
      <button className="button" onClick={handleMinus} disabled={number === minNumber ? true : false}>
        -
      </button>
      <p>counter: {number}</p>
    </div>
  );
};
