import { use } from "react";
import Bondhu from "./Bondhu";

export default function Friend({ friendsPromise }) {
  const users = use(friendsPromise);
  console.log(users);
  return (
    <div className="users">
      <h4>Friends: {users.length}</h4>
      {users.map((friends) => (
        <Bondhu key={friends.id} friends={friends}></Bondhu>
      ))}
    </div>
  );
}
