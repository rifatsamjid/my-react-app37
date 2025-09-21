import { use } from "react";

export default function Friend({ friendsPromise }) {
  const users = use(friendsPromise);
  console.log(users);
  return (
    <div className="users">
      <h4>Friends: {users.length}</h4>
      <p>hello bro</p>
    </div>
  );
}
