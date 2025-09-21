import { Suspense } from "react";
import "./App.css";
import Baller from "./Baller";
import Counter from "./Counter";
import BatsMan from "./Player";
import Users from "./Users";
import Friend from "./Friends";
import Post from "./Post";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);
const friendFetch = async () => {
  const rest = await fetch("https://jsonplaceholder.typicode.com/users");
  return rest.json();
};
const postFetch = async () => {
  const rest = await fetch("https://jsonplaceholder.typicode.com/posts");
  return rest.json();
};
function App() {
  const friendsPromise = friendFetch();
  const postPromise = postFetch();
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
      <Suspense fallback={<h3>Post Loading...</h3>}>
        <Post postPromise={postPromise}></Post>
      </Suspense>

      <Suspense fallback={<h3>Friends ar coming soon...</h3>}>
        <Friend friendsPromise={friendsPromise}></Friend>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

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
