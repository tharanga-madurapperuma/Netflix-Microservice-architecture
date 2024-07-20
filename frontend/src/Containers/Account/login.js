import React from 'react'
import "./account.css"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate(); 
  return (
    <div className='wrapper__login'>
        
        <div className='login-box'>
            <form>
                <label className='login-box-label'>LOGIN</label>
                <input className='login-box-userInputs' type='text' placeholder='Enter your email'></input>
                <input className='login-box-userInputs' type='text' placeholder='Enter your password'></input>
                <label className='login-box-linkToPage' onClick={() => {navigate('/signup')}}>👉 Are you a new user? Sign up here...</label>
                <input className='login-box-button' type='button' value='login'></input>
            </form>
        </div>
    </div>
  )
}

export default Login