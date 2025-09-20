import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handelClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    console.log("add click");
  };

  const countStyle = {
    border: "2px solid white",
    // padding: "10px",
  };
  return (
    <div style={countStyle}>
      <h3>Count: {count}</h3>
      <button onClick={handelClick}>Add</button>
    </div>
  );
}
