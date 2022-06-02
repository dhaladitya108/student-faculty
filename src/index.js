import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import StudentLogin from "./pages/StudentLogin";
import FacultyLogin from "./pages/FacultyLogin";
import FacultyRegister from "./pages/FacultyRegister";
import StudentRegister from "./pages/StudentRegister";
import Profile from "./pages/Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login/student" element={<StudentLogin />} />
        <Route path="/register/student" element={<StudentRegister />} />
        <Route path="/login/faculty" element={<FacultyLogin />} />
        <Route path="/register/faculty" element={<FacultyRegister />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
