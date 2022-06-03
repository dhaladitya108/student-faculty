import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import StudentLogin from "./pages/StudentLogin";
import FacultyLogin from "./pages/FacultyLogin";
import FacultyRegister from "./pages/FacultyRegister";
import StudentRegister from "./pages/StudentRegister";
import StudentProfile from "./pages/FacultyProfile";
import FacultyProfile from "./pages/FacultyProfile";
import Blogs from "./pages/Blogs";

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
        <Route path="/profile/student/:id" element={<StudentProfile />} />
        <Route path="/profile/faculty/:id" element={<FacultyProfile />} />
        <Route path="/blog/" element={<Blogs />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
