import { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";

function DisplayBlog() {
  const [blogs, setBlogs] = useState([]);

  const fetchData = () => {
    fetch("https://iwtserver.herokuapp.com/blogs/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <div className="mt-4 mx-auto">
      {blogs.length > 0 && (
        <div className="mx-auto">
          {blogs.map((blog) => (
            <div
              className="card mx-auto mb-4"
              key={blog._id}
              style={{ maxWidth: "36rem" }}
            >
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <h6 className="card-subtitle">{blog.author}</h6>
                <p className="card-text">{blog.body}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DisplayBlog;
