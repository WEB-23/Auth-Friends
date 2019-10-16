import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    console.log(credentials);
  };

  const login = e => {
    e.preventDefault();

    axiosWithAuth()
      .post("/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={login}>
        <label>User Name</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
          value={credentials.username}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={credentials.password}
        />

        <input type="submit" />
      </form>
      <h2>YOU SHALL NOT PASS!!!!!</h2>

    </div>
  );
};

export default Login;
