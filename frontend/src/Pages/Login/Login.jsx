import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'




const Login = () => {

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login/loginhome');
  }

  return (
    
    <div>
      
      <h1>Login</h1>
      <button onClick={handleLoginClick} className='login-button'>Login</button>
    </div>
  )
}

export default Login
