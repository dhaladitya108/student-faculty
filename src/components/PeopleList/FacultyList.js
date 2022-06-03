import Card from "../Card/Card";
import "./PeopleList.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function FacultyList() {
  const [users, setUsers] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = () => {
    fetch("https://iwtserver.herokuapp.com/getfaculties/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setFilteredData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilter = (e) => {
    const searchUser = e.target.value;
    const newFilter = users.filter((v) => {
      return v.fullname.toLowerCase().includes(searchUser.toLowerCase());
    });
    setFilteredData(newFilter);
  };

  return (
    <Card>
      <h1 className="subheading">Faculties List</h1>
      <input
        type="text"
        class="form-control"
        placeholder="Search here"
        onChange={handleFilter}
      />
      <div className="mt-4">
        {filteredData.length > 0 && (
          <div>
            {filteredData.map((user) => (
              <div key={user._id} className="user__name">
                <Link to={`profile/faculty/${user._id}`}>{user.fullname}</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}

export default FacultyList;
