import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import StudentLogin from "./pages/StudentLogin";
import FacultyLogin from "./pages/FacultyLogin";
import FacultyRegister from "./pages/FacultyRegister";
import StudentRegister from "./pages/StudentRegister";
import StudentProfile from "./pages/StudentProfile";
import FacultyProfile from "./pages/FacultyProfile";
import Blogs from "./pages/Blogs";
import { AuthContext } from "../src/context/AuthContext/AuthContext";


function App() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/login/student"
            element={user ? <Dashboard /> : <StudentLogin />}
          />{" "}
          <Route
            path="/login/faculty"
            element={user ? <Dashboard /> : <FacultyLogin />}
          />{" "}
          <Route path="/register/student" element={<StudentRegister />} />
          {/* <Route path="/login/faculty" element={<FacultyLogin />} /> */}
          <Route path="/register/faculty" element={<FacultyRegister />} />
          <Route path="/profile/student/:id" element={<StudentProfile />} />
          <Route path="/profile/faculty/:id" element={<FacultyProfile />} />
          <Route path="/blog/" element={<Blogs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
