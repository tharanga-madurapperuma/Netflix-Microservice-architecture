import React from 'react'
import "./account.css"
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate(); 
  return (
    <div className='wrapper__create'>
        
        <div className='create-box'>
            <form>
                <label className='login-box-label'>SIGN UP</label>
                <input className='login-box-userInputs' type='text' placeholder='Enter your first name'></input>
                <input className='login-box-userInputs' type='text' placeholder='Enter your last name'></input>
                <input className='login-box-userInputs' type='text' placeholder='Enter your email'></input>
                <input className='login-box-userInputs' type='text' placeholder='Enter your password'></input>
                <label className='login-box-profileText'>Upload a profile picture</label>
                <input className='login-box-userInputs' type='file' />
                <label className='login-box-linkToPage' onClick={() => {navigate('/login')}}>👉 Are you a existing user? Login here...</label>
                <input className='login-box-CreateButton' type='button' value='Create Account'></input>
            </form>
        </div>
    </div>
  )
}

export default SignUp