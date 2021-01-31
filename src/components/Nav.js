import React from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./FireBase";
import { logout } from "../Actions/LoginAction";
import { Link, useHistory } from "react-router-dom";
function NavBarTop() {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const logoutAction = () => {
    auth.signOut();
    dispatch(logout());
    history.push("/login");
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/home">Akshay</Link>
        </Navbar.Brand>

        {!userInfo ? (
          <Nav className="ml-auto">
            <LinkContainer to="/login">
              <p className="menuLinks">Login</p>
            </LinkContainer>
            <LinkContainer to="/signup">
              <p className="menuLinks">Sign-Up</p>
            </LinkContainer>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <LinkContainer to="/home">
              <p className="menuLinks">Home</p>
            </LinkContainer>
            <LinkContainer to="/images">
              <p className="menuLinks">Images</p>
            </LinkContainer>
            <LinkContainer to="/posts">
              <p className="menuLinks">Posts</p>
            </LinkContainer>
            <LinkContainer to="/albums">
              <p className="menuLinks">Albums</p>
            </LinkContainer>

            <p onClick={() => logoutAction()} className="menuLinks">
              Log-Out
            </p>
          </Nav>
        )}
      </Navbar>
    </div>
  );
}

export default NavBarTop;
