import Navbar from "../components/Navbar/Navbar";
import FacultyList from "../components/PeopleList/FacultyList";
import StudentList from "../components/PeopleList/StudenList";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <FacultyList />
        <StudentList />
      </div>
    </>
  );
}

export default Dashboard;
