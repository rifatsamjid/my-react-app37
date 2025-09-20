import "./App.css";
import Baller from "./Baller";
import Counter from "./Counter";
import BatsMan from "./Player";

function App() {
  function hanledClick() {
    alert("i am clicked");
  }
  const handelClick3 = () => {
    alert("clicked 3");
  };
  const handlerClick5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };
  return (
    <>
      <h1>React Core Concept Part 2</h1>
      <Baller></Baller>
      <BatsMan></BatsMan>
      <Counter></Counter>
      <button onClick={hanledClick}>Click</button>
      <button
        onClick={function handelClick() {
          alert("clicked 2");
        }}
      >
        Click2
      </button>
      <button onClick={handelClick3}>clicked 3</button>
      <button
        onClick={() => {
          alert("clicked 4");
        }}
      >
        clicked 4
      </button>
      <button
        onClick={() => {
          handlerClick5(10);
        }}
      >
        clicked 5
      </button>
    </>
  );
}

export default App;
