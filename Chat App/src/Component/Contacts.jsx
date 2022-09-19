function Contacts({ users, active, onChange }) {
  return (
    <div>
      {users.map((user) => (
        <div
          style={{ background: active === user ? "tomato" : null }}
          key={user.id}
          onClick={() => onChange(user)}
        >
          {user.name}
        </div>
      ))}
    </div>
  );
}

export default Contacts;
