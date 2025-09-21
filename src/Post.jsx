import { use } from "react";
import Posts from "./Posts";

export default function Post({ postPromise }) {
  const posts = use(postPromise);
  console.log(posts);
  return (
    <div className="post">
      <h3>All Post Are Here:{posts.length}</h3>
      {posts.map((posts) => (
        <Posts posts={posts}></Posts>
      ))}
    </div>
  );
}
