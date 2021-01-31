import { LOGOUT, LOGIN } from "../Actions/Types";
const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  isAuthenticated:localStorage.getItem("userInfo")
  ? true
  : false,
};
export const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        userInfo: action.payload,
        isAuthenticated:true,
      };
    case LOGOUT:
      return {
        userInfo: null,
        isAuthenticated:false
      };

    default:
      return state
  }
};
export default auth