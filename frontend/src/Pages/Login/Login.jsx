import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

import { Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLoginClick = async (e) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/login", credentials);
      localStorage.setItem("token", res.data.token); // Save token for auth
      alert("Login successful!");
      navigate("/login/loginhome"); // Redirect to login home
    } catch (error) {
      console.error(error.response?.data);
      alert(error.response?.data.error || "Login failed. Please try again.");
    }
  };

  return (
    <div>
      <div className="login">
        <Link to="/" className="Homebtn">Home </Link>
        <div className="login-container">
          <h1>Login</h1>
          <Form onSubmit={handleLoginClick}>
            <FormGroup>
              <label htmlFor="email">Username:</label>
              <input
                type="email"
                id="email"
                placeholder="email"
                required
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="password"
                required
                onChange={handleChange}
              />
            </FormGroup>
            <button type="submit" className="login-button">
              Login
            </button>
          </Form>
          <div className="login-footer">
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Login;