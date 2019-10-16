import React from "react";
import "./App.css";

import { Route, Link } from "react-router-dom";
import Login from "./components/Login.js";
import Friends from "./components/Friends.js";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Link to="/login">Login</Link>
      <Link to="/protected">Protected</Link>

      <Route path={"/login"} component={Login} />
      <PrivateRoute exact path="/protected" component={Friends} />
    </div>
  );
}

export default App;
