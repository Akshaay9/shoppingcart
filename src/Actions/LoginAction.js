import axios from "axios";

import { LOGOUT, LOGIN } from "./Types";
export const login = (data) => async (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: data,
  });
  localStorage.setItem("userInfo", JSON.stringify(data));
};
export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  localStorage.removeItem("userInfo")
};
