export default function Bondhu({ friends }) {
  console.log(friends);
  const { name, email, phone } = friends;
  return (
    <div className="users">
      <h3>Name: {name} </h3>
      <p>Email:{email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
}
