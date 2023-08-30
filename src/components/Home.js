import BlogList from "./BlogList";
import UserList from "./UserList";
import UseFetch from "./UseFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    isError,
  } = UseFetch("http://localhost:3001/blogs");

  const { data: users } = UseFetch("http://localhost:3001/users");

  return (
    <div className="home">
      {isError && <div>{isError}</div>}
      {isLoading && <div>Loading.....</div>}
      {blogs && <BlogList data={blogs} title="All Blogs" />}
      {users && <UserList data={users} title="All Users" />}
    </div>
  );
};

export default Home;
