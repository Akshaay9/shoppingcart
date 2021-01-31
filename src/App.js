import React, { useEffect } from "react";
import "./app.scss";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import NavBarTop from "./components/Nav";
import SignUp from "./components/SignUp";
import { auth } from "./components/FireBase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./Actions/LoginAction";
import Images from "./components/Images";
import Posts from "./components/Posts";
import Albums from "./components/Albums";
import PostsInfo from "./components/PostsInfo";
import AlbumInfo from "./components/AlbumInfo";
import PrivateRoute from "./components/Routes.js/PrivateRoute";
function App() {
  const { userInfo, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <Router >
      <NavBarTop />
      <Switch>
      
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/home"  component={Home}/>
        <PrivateRoute exact path="/images"  component={Images}/>
        <PrivateRoute exact path="/posts" component={Posts}/>
        <PrivateRoute exact path="/posts/:id" component={PostsInfo}/>
        <PrivateRoute exact path="/albums" component={Albums}/>
        <PrivateRoute exact path="/albums/:id" component={AlbumInfo}/>
       
      </Switch>
    </Router>
  );
}

export default App;
