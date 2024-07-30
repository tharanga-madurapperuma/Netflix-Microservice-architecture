import React from 'react'
import "./account.css"
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate(); 

      const saveUserData = async (name, email, password) => {
      fetch('http://localhost:8081/addGUser',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
        })
      })
    }

  const userValidation = () => {

  }

  return (
    <div className='wrapper__create'>
        
        <div className='create-box'>
            <form>
                <label className='login-box-label'>SIGN UP</label>
                <input className='login-box-userInputs' type='text' placeholder='Enter your name'></input>
                {/* <input className='login-box-userInputs' type='text' placeholder='Enter your last name'></input> */}
                <input className='login-box-userInputs' type='text' placeholder='Enter your email'></input>
                <input className='login-box-userInputs' type='text' placeholder='Enter your password'></input>
                {/* <label className='login-box-profileText'>Upload a profile picture</label> */}
                {/* <input className='login-box-userInputs' type='file' /> */}
                <label className='login-box-linkToPage' onClick={() => {navigate('/login')}}>👉 Are you a existing user? Login here...</label>
                <input className='login-box-CreateButton' type='button' value='Create Account' onClick={userValidation}></input>
            </form>
        </div>
    </div>
  )
}

export default SignUp