import { React, useState } from "react";
import "./App.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((count) => count + 1);
  };

  const decrease = () => {
    setCounter((count) => count - 1);
  };
  return (
    <div className="counter">
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={decrease}>
          -
        </button>
        <button className="control__btn" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
}
