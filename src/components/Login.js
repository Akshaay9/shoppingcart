import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./FireBase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../Actions/LoginAction";
function Login({ history }) {
  const { userInfo } = useSelector((state) => state.auth);
const dispatch=useDispatch()
  useEffect(() => {
    if (userInfo) {
      history.push("/home");
    }
  }, []);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const buttonHandler = () => {
    const { email, password } = form;

    if (password == "" || email == "") {
      return alert("please fill all relevant section");
    }

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        dispatch(login(auth));
        history.push("/home");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="signupcontainer">
      <div className="signup">
        <label htmlFor="name">email</label>
        <input
          type="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <label htmlFor="name">password</label>
        <input
          type="text"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button onClick={() => buttonHandler()}>Log-Up</button>
      </div>
      Dont Have an Account ? <Link to="/signup">Sign-In</Link>
    </div>
  );
}

export default Login;
