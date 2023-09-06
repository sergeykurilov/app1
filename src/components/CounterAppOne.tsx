/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import "../index.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const handleEvent = (e) => {
      if (e.detail.from === "APP2") {
        setCount(e.detail.count);
      }
    };
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const handleBroadcast = (e) => {
      alert(`Broadcast received in APP1: ${e.detail.message}`);
    };

    window.addEventListener("counterChange", handleEvent);
    window.addEventListener("broadcast", handleBroadcast);

    return () => {
      window.removeEventListener("counterChange", handleEvent);
      window.removeEventListener("broadcast", handleBroadcast);
    };
  }, []);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);

    const event = new CustomEvent("counterChange", {
      detail: { from: "APP1", count: newCount },
    });

    const broadcastEvent = new CustomEvent("broadcast", {
      detail: { message: "Hello from APP1" },
    });

    window.dispatchEvent(event);
    window.dispatchEvent(broadcastEvent);
  };
  return (
    <div className="flex h-full items-center justify-center bg-[#f89494] text-center font-[bold] text-lg">
      <div className="flex flex-col">
        <span>
          Add by one each click <strong>APP-1</strong>
        </span>
        <div>Your click count : {count} </div>
        <button onClick={handleClick}>Click me</button>
      </div>
      <img src={logo.toString()} width={100} height={100} alt="Example SVG" />
    </div>
  );
};

export default Counter;
