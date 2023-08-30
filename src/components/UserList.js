const UserList = ({ data, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {data.map((user) => (
        <div className="blog-preview" key={user.id}>
          <h2>{user.name}</h2>
          <p>email: {user.email}</p>
        </div>
      ))}
    </div>
  );
};
export default UserList;
