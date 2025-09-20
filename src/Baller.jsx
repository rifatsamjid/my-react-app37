import { useState } from "react";

export default function Baller() {
  const [ball, setBall] = useState(0);
  const handelBall = () => {
    const updateBall = ball + 1;
    setBall(updateBall);
  };
  const [noBall, setNoBall] = useState(0);
  const handelNoBall = () => {
    const updateNoBall = noBall + 1;
    setNoBall(updateNoBall);
  };
  return (
    <div>
      <h3>Baller Bangladesh</h3>
      {ball > 6 && <p>First Over Complete</p>}
      {ball > 12 && <p>second over complete</p>}
      <h1>Ball Count: {ball} </h1>
      <h1>No Ball Count: {noBall}</h1>
      <button onClick={handelBall}>Ball</button>
      <button onClick={handelNoBall}> NO Ball</button>
    </div>
  );
}
