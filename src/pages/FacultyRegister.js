import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";
import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { facultyregister } from "../context/AuthContext/ApiCalls";

function FacultyRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [expertize, setExpertize] = useState("");
  const [qualification, setQualification] = useState("");
  const [address, setAddress] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    facultyregister(
      { email, password, fullname, phone, expertize, address, qualification },
      dispatch
    );
  };
  return (
    <>
      <Navbar />
      <Card>
        <h1 class="subheading mb-4">Faculty Register</h1>
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
            <label for="expertize" class="form-label">
              Expertize
            </label>
            <input
              type="text"
              class="form-control"
              id="expertize"
              onChange={(e) => setExpertize(e.target.value)}
            />
          </div>
          <div class="mb-4">
            <label for="qualification" class="form-label">
              Qualification
            </label>
            <input
              type="text"
              class="form-control"
              id="qualification"
              onChange={(e) => setQualification(e.target.value)}
            />
          </div>
          <div class="mb-4">
            <label for="address" class="form-label">
              Address
            </label>
            <textarea
              type="text"
              class="form-control"
              id="address"
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>
          <div class="mb-4">
            <label for="resume" class="form-label">
              Resume
            </label>
            <input type="file" class="form-control" id="resume" />
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

export default FacultyRegister;
