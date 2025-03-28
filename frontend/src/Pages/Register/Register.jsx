import React, { useState } from "react";
import "./Register.css";
import { Form, FormGroup } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    firstName: undefined,
    lastName: undefined,
    country: undefined,
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLoginClick = async (e) => {
    e.preventDefault();
    const { firstName, lastName, country, email, password, confirmPassword } = credentials;

    if (!firstName || !lastName || !country || !email || !password || !confirmPassword) {
      alert("Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/signup", {
        firstName,
        lastName,
        country,
        email,
        password,
      });
      alert("Registration successful! Please log in.");
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error(error.response?.data);
      alert(error.response?.data.error || "Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <div className="register">
        
        <div className="register-container">
          <h1>Sign Up</h1>
          <Form className="register-form" onSubmit={handleLoginClick}>
            <div className="left-column">
              <FormGroup>
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  required
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  required
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="country">Country:</label>
                <input
                  type="text"
                  id="country"
                  placeholder="Country"
                  required
                  onChange={handleChange}
                />
              </FormGroup>
            </div>

            <div className="right-column">
              <FormGroup>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  required
                  onChange={handleChange}
                />
              </FormGroup>
            </div>

            <div className="register-footer">
              <button type="submit" className="register-button">
                Sign Up
              </button>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
      
    </div>
  );
};

export default Register;