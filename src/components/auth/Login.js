const Login = ({ handleLogin }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const { email } = event.target.elements;
    handleLogin(email.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5>
                <b>Login or Signup</b>
              </h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email address"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="mt-3">
                  <input
                    type="submit"
                    className="btn btn-md btn-primary"
                    value="Continue"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
