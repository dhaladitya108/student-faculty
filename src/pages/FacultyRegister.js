import Navbar from "../components/Navbar/Navbar";
import Card from "../components/Card/Card";

function FacultyRegister() {
  return (
    <>
      <Navbar />
      <Card>
        <h1 class="subheading mb-4">Faculty Register</h1>
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
            <label for="expertize" class="form-label">
              Expertize
            </label>
            <input type="text" class="form-control" id="expertize" />
          </div>
          <div class="mb-4">
            <label for="qualification" class="form-label">
              Qualification
            </label>
            <input type="text" class="form-control" id="qualification" />
          </div>
          <div class="mb-4">
            <label for="address" class="form-label">
              Address
            </label>
            <textarea type="text" class="form-control" id="address"></textarea>
          </div>
          <div class="mb-4">
            <label for="resume" class="form-label">
              Resume
            </label>
            <input type="file" class="form-control" id="resume" />
          </div>
          <button type="submit" class="btn__primary">
            Sign up
          </button>
        </form>
      </Card>
    </>
  );
}

export default FacultyRegister;
