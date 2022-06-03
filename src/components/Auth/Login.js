import React, { useState, useContext } from "react";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { login } from "../../context/AuthContext/ApiCalls";

// import { useNavigate } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

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
            <input
              type="email"
              class="form-control"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="mb-4">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            class="btn__primary"
            onClick={handleLogin}
            disabled={isFetching}
          >
            Sign in
          </button>
        </form>
      </Card>
    </>
  );
}

export default Login;
