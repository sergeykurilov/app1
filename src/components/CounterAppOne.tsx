import React, { useState } from "react";
import logo from "../assets/logo.svg";
import "../index.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-full items-center justify-center bg-[#f89494] text-center font-[bold] text-lg">
      <div className="flex flex-col">
        <span>
          Add by one each click <strong>APP-1</strong>
        </span>
        <div>Your click count : {count} </div>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
      <img src={logo.toString()} width={100} height={100} alt="Example SVG" />
    </div>
  );
};

export default Counter;
