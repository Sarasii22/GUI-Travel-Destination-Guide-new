import React from 'react'
import './Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
//import loginimg from '../../assets/images/login.jpg'
import { Form, FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'
const Login = () => {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login/loginhome');
  }

  const handleChange = (e) => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
  };

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined
  });

  const handleClick = e => {
    e.preventDefault();
  };

  return (
    <div>
      
      <div className="login">
        <NavBar />
        <div className='login-container'>
        <h1>Login</h1>
        <Form>
          <FormGroup>
            <label htmlFor="email">Username:</label>
            <input type="email" id="email" placeholder="email" required onChange={(handleChange)} />
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="password" required onChange={(handleChange)}/>
          </FormGroup>
          <button onClick={handleLoginClick} className='login-button'>Login</button>
        </Form>
        <div className='login-footer'>
          <p>Don't have an account? <Link to='/register'>Register</Link></p>
        </div>
        </div>
        
        
      </div>
      <Footer />
    </div>
  )
}

export default Login
