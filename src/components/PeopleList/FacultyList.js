import Card from "../Card/Card";
import "./PeopleList.css";
import React, { useEffect, useState } from "react";

function FacultyList() {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://iwtserver.herokuapp.com/getfaculties/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Card>
      <h1 className="subheading">Faculties List</h1>
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

export default FacultyList;
