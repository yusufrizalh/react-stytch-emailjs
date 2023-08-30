const Login = ({ handleLogin }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const { email } = event.target.elements;

    handleLogin(email.value);
  };

  return (
    <div className="container">
      <h3>Login Page</h3>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-8">
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                required
                autoComplete="off"
                placeholder="test@email.com"
              />
            </div>
            <div className="mb-3">
              <input
                type="submit"
                value="Continue"
                className="btn btn-md btn-primary"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
