import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import axios from "axios";
import Navbar from "../components/Navbar/Navbar";

function Blogs() {
  return (
    <>
      <Navbar />
      <CreateBlog />
      <DisplayBlog />
    </>
  );
}

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

function CreateBlog() {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [author, setAuthor] = useState();

  const resetUserInputs = () => {
    setTitle("");
    setBody("");
    setAuthor("");

    window.location.reload();
  };

  const submit = (event) => {
    event.preventDefault();

    const payload = {
      title: title,
      body: body,
      author: author,
    };

    axios({
      url: "https://iwtserver.herokuapp.com/postblogs/",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data has been sent to the server");
        resetUserInputs();
      })
      .catch(() => {
        console.log("Internal server error");
      });
  };

  const handleChangeTitle = (e) => {
    const title = e.target.value;
    setTitle(title);
    console.log(title);
  };
  const handleChangeBody = (e) => {
    const body = e.target.value;
    setBody(body);
    console.log(body);
  };
  const handleChangeAuthor = (e) => {
    const author = e.target.value;
    setAuthor(author);
    console.log(author);
  };

  return (
    <Card>
      <h1 class="subheading mb-4">Create Blog</h1>
      <form method="post" class="d-flex flex-column" onSubmit={submit}>
        <div class="mb-3">
          <label for="title" class="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            onChange={handleChangeTitle}
          />
        </div>
        <div class="mb-4">
          <label for="body" class="form-label">
            Body
          </label>
          <input
            type="text"
            class="form-control"
            id="body"
            onChange={handleChangeBody}
          />
        </div>
        <div class="mb-4">
          <label for="author" class="form-label">
            Author Name
          </label>
          <input
            type="text"
            class="form-control"
            id="author"
            onChange={handleChangeAuthor}
          />
        </div>
        <button type="submit" class="btn__primary">
          Create Blog
        </button>
      </form>
    </Card>
  );
}

export default Blogs;
