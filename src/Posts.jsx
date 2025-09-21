export default function Posts({ posts }) {
  const { title, body } = posts;
  return (
    <div className="post">
      <h3>Title:{title} </h3>
      <p className="post">Body: {body}</p>
    </div>
  );
}
