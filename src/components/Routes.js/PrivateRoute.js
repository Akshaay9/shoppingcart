import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import {Login} from "./Utils"
function PrivateRoute({ component: Component, ...rest }) {
  
  return (
    <div className="">
      <Switch>
        <Route
          {...rest}
          render={(props) =>
             !Login() ? (
              <Redirect to="/login" />
            ) : (
              <Component {...props} />
            )
          }
        />
      </Switch>
    </div>
  );
}

export default PrivateRoute;
