import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";
// import { useNavigate } from "react-router-dom";
export const login = async (user, dispatch) => {

  try {
    const res = await axios.post("https://iwtserver.herokuapp.com/login", user);

    dispatch(loginSuccess(res.data));
    // navigate("/");
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const register = async (user, dispatch) => {

  try {
    const res = await axios.post("https://iwtserver.herokuapp.com/register", user);

    dispatch(loginSuccess(res.data));
    // navigate("/");
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const facultylogin = async (user, dispatch) => {

  try {
    const res = await axios.post("https://iwtserver.herokuapp.com/facultylogin", user);

    dispatch(loginSuccess(res.data));
    // navigate("/");
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const facultyregister = async (user, dispatch) => {

  try {
    const res = await axios.post("https://iwtserver.herokuapp.com/facultyregister", user);

    dispatch(loginSuccess(res.data));
    // navigate("/");
  } catch (error) {
    dispatch(loginFailure());
  }
};
