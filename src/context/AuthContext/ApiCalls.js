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
