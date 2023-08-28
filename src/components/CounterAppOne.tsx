import React, { useState } from "react";
import "../index.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-red-500">
      <div>
        Add by one each click <strong>APP-1</strong>
      </div>
      <div>Your click count : {count} </div>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Counter;
