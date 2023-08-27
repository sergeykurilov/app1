import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ background: "red" }}>
      <div>
        Add by one each click <strong>APP-1</strong>
      </div>
      <div>Your click count : {count} </div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Counter;
