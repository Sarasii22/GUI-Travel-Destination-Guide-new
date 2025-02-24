import React from 'react';
import './Register.css';
import { Form, FormGroup } from 'reactstrap';
import Navbar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (credentials.email && credentials.password) {
      navigate('/register/login'); // Navigate only if fields are filled
    } else {
      alert('Please fill in all required fields.'); // Show error if fields are empty
    }
  };

   const handleChange = (e) => {
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
  
    const [credentials, setCredentials] = useState({
      firstname: undefined,
      lastname: undefined,
      country: undefined,
      email: undefined,
      password: undefined,
    });
  

  return (
    <div>
    <div className="register">
      <Navbar />
      <div className="register-container">
        <h1>Sign Up</h1>
        <Form className="register-form" onSubmit={handleLoginClick}>
          {/* Left Column */}
          <div className="left-column">
            <FormGroup>
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" placeholder="First Name" required onChange={handleChange} />
            </FormGroup>
            <FormGroup>
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" placeholder="Last Name" required  onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
              <label htmlFor="country">Country:</label>
              <input type="text" id="country" placeholder="Country" required onChange={handleChange} />
            </FormGroup>
          </div>

          {/* Right Column */}
          <div className="right-column">
            <FormGroup>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Email" required  onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" placeholder="Password" required onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input type="password" id="confirmPassword" placeholder="Confirm Password" required onChange={handleChange}/>
            </FormGroup>
          </div>

          
          <div className="register-footer">
          <button type="submit" className="register-button">Sign up</button>
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </Form>
      </div>
      
    </div>
    <Footer />
    </div>
  );
};

export default Register;