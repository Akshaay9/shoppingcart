import React from "react";
import "./app.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AdminPanel from "./Components/AdminPanel";
import ProductList from "./Components/ProductList";
import Nav from "./Components/Nav";
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={AdminPanel} />
        <Route exact path="/products" component={ProductList} />
      </Switch>
    </Router>
  );
}

export default App;
