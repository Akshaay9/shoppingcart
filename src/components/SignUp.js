import React, { useState,useEffect } from "react";

import { Link, useHistory } from "react-router-dom";
// import fire from "./utils";
import { Route, Redirect } from 'react-router-dom';
import { auth } from "./FireBase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../Actions/LoginAction";
function SignUp() {
  const dispatch=useDispatch()
  const { userInfo } = useSelector((state) => state.auth);
  const history=useHistory()
  useEffect(() => {
    if (userInfo) {
      history.push("/home");
    }
  }, []);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const submitHandler = () => {
    const { name, email, password, cpassword } = form;
    if (password == "" || name == "" || email == "" || cpassword == "") {
      return alert("please fill all relevant section");
    }
    if (!password == "" && !cpassword == "" && password != cpassword) {
      return alert("password did not match");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        dispatch(login(auth));
        history.push("/home");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="signupcontainer">
      <div className="signup">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
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
        <label htmlFor="name">confirm password</label>
        <input
          type="text"
          onChange={(e) => setForm({ ...form, cpassword: e.target.value })}
        />
        <button onClick={() => submitHandler()}>Sign-Up</button>
      </div>
      Alredy Have an Account ? <Link to="/login">Log-In</Link>
    </div>
  );
}

export default SignUp;
