import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h1>Hooks useStae</h1>
      </div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};
