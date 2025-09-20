import { useState } from "react";

export default function BatsMan() {
  const [runs, setRuns] = useState(0);
  const [six, setSix] = useState(0);
  const singleRun = () => {
    const newRun = runs + 1;
    setRuns(newRun);
  };

  const handelSix = () => {
    const updateRuns = runs + 6;
    const updateSix = six + 1;
    setSix(updateSix);
    setRuns(updateRuns);
  };
  const handelFour = () => {
    const updateRuns = runs + 4;
    setRuns(updateRuns);
  };
  return (
    <div>
      <h2>Bating: Bangladesh</h2>
      <p>
        <small>six: {six}</small>
      </p>
      {runs > 50 && <p>Your run is 50</p>}
      <h1>Score: {runs} </h1>
      <button onClick={singleRun}>Single</button>
      <button onClick={handelFour}>Four</button>
      <button onClick={handelSix}>Six</button>
    </div>
  );
}
