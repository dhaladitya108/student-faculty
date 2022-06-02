import Card from "../Card/Card";
import "./PeopleList.css";
import React, { useEffect, useState } from "react";

function StudentList() {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://iwtserver.herokuapp.com/getstudents/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Card>
      <h1 className="subheading">Students List</h1>
      <div className="mt-4">
        {users.length > 0 && (
          <ul className="unstyled-list">
            {users.map((user) => (
              <li key={user._id}>{user.fullname}</li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
}

export default StudentList;
