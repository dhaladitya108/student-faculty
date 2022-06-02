import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";

function Login(props) {
  return (
    <>
      <Navbar />
      <Card>
        <h1 class="subheading mb-4">{props.heading}</h1>
        <form method="post" class="d-flex flex-column">
          <div class="mb-3">
            <label for="email" class="form-label">
              Email address
            </label>
            <input type="email" class="form-control" id="email" />
          </div>
          <div class="mb-4">
            <label for="password" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="password" />
          </div>
          <button type="submit" class="btn__primary">
            Sign in
          </button>
        </form>
      </Card>
    </>
  );
}

export default Login;
