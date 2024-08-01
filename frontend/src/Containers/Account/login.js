import React, { useEffect, useState } from 'react'
import "./account.css"
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate(); 
  const [admins, setAdmins] = useState();
  const [gUsers, setGUsers] = useState();
  var login = false;

  useEffect(() => {
  
    const fetchUserData = async () => {
      try {
        const userResult = await fetch('http://localhost:8081/getAllGUser');
        setGUsers(await userResult.json());
  
      } catch (error) {
        console.log(error);
      }
    }
  
    const fetchAdminData = async () => {
      try {
        const adminResult = await fetch('http://localhost:8081/getAllAdmin');
        setAdmins(await adminResult.json());
      } catch (error) {
        console.log(error);
      }
    }

    fetchAdminData();
    fetchUserData();
  },[]);

  

  const userValidation = () => {
    // userValidation function starts here
    
    const email = document.getElementById("userEmail").value;
    const password = document.getElementById("userPassword").value;

    admins?.forEach(admin => {
      if(email === "" || password === ""){
        alert("Please enter email and password..!");
      }
      
      else{
        if(admin.email === email && admin.password === password){
          login = true;
          let loggedAdmin = JSON.stringify(admin);
          localStorage.setItem("loggedUser", loggedAdmin);
          navigate('/addContent');
        }
        else if(admin.email === email){
          alert("Wrong Password..!");
        }
      }
    })

    gUsers?.map(GUser => {
      if(GUser.email === email && GUser.password === password){
        login = true;
        let loggedUser = JSON.stringify(GUser);
        localStorage.setItem("loggedUser", loggedUser);
        localStorage.setItem("userEmail", GUser.email);
        navigate('/');
        
      }
      else if(GUser.email === email){
        alert("Wrong Password..!");
      }
    });
    if(!login){
      alert("Please enter valid email address or create a new account..!");
    } 
  }

  return (
    <div className='wrapper__login'>
        
        <div className='login-box'>
            <form>
                <label className='login-box-label'>LOGIN</label>
                <input className='login-box-userInputs' type='email' id='userEmail' placeholder='Enter your email'></input>
                <input className='login-box-userInputs' type='password' id='userPassword' placeholder='Enter your password'></input>
                <label className='login-box-linkToPage' onClick={() => {navigate('/signup')}}>👉 Are you a new user? Sign up here...</label>
                <input className='login-box-button' type='button' value='login' onClick={userValidation}></input>
            </form>
        </div>
    </div>
  )
}

export default Login