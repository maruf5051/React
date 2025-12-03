import "./hooks.css";
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // handle increment function
  const handleIncrement = () => {
    setCount(count + step);
  };

  // handle decrement function
  const handleDecrement = () => {
    setCount(count - step);
  };

  // handle reset function
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div>
        <h1>Hooks useStae</h1>
      </div>
      <h3>
        Count: <span>{count}</span>
      </h3>
      <div>
        <label>Step:</label>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>
      <div>
        <button
          className="control-button"
          onClick={handleIncrement}
          disabled={count >= 100}
        >
          Increment
        </button>
        <button
          className="control-button"
          onClick={handleDecrement}
          disabled={count <= 0}
        >
          Decrement
        </button>
        <button className="control-button" onClick={handleReset}>
          Resent
        </button>
      </div>
    </div>
  );
};
