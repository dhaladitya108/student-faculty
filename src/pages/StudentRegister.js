import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";

function StudentRegister() {
  return (
    <>
      <Navbar />
      <Card>
        <h1 class="subheading mb-4">Student Register</h1>
        <form method="post" class="d-flex flex-column">
          <div class="mb-3">
            <label for="email" class="form-label">
              Name
            </label>
            <input type="email" class="form-control" id="email" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">
              Email address
            </label>
            <input type="email" class="form-control" id="email" />
          </div>
          <div class="mb-4">
            <label for="password" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="password" />
          </div>
          <div class="mb-4">
            <label for="phone" class="form-label">
              Phone
            </label>
            <input type="text" class="form-control" id="phone" />
          </div>
          <div class="mb-4">
            <label for="registerno" class="form-label">
              Registeration Number
            </label>
            <input type="text" class="form-control" id="registerno" />
          </div>
          <div class="mb-4">
            <label for="course" class="form-label">
              Course Enrolled
            </label>
            <input type="text" class="form-control" id="course" />
          </div>
          <div class="mb-4">
            <label for="college" class="form-label">
              College Name
            </label>
            <input type="text" class="form-control" id="college" />
          </div>
          <button type="submit" class="btn__primary">
            Sign up
          </button> 
        </form>
      </Card>
    </>
  );
}

export default StudentRegister;
