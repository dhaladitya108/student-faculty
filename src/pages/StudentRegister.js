import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { register } from "../context/AuthContext/ApiCalls";
import { useNavigate } from "react-router-dom";

function StudentRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [college, setCollege] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);
  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    register({ email, password, fullname, phone, course, college }, dispatch);
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <Card>
        <h1 class="subheading mb-4">Student Register</h1>
        <form method="post" class="d-flex flex-column">
          <div class="mb-3">
            <label for="email" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="email"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
          <div class="mb-4">
            <label for="phone" class="form-label">
              Phone
            </label>
            <input
              type="text"
              class="form-control"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div class="mb-4">
            <label for="course" class="form-label">
              Course Enrolled
            </label>
            <input
              type="text"
              class="form-control"
              id="course"
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>
          <div class="mb-4">
            <label for="college" class="form-label">
              College Name
            </label>
            <input
              type="text"
              class="form-control"
              id="college"
              onChange={(e) => setCollege(e.target.value)}
            />
          </div>
          <button
            type="submit"
            class="btn__primary"
            onClick={handleLogin}
            disabled={isFetching}
          >
            Sign up
          </button>
        </form>
      </Card>
    </>
  );
}

export default StudentRegister;
