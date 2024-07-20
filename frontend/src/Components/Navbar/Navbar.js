import React from 'react'
import { myflix, regularUser } from '../../assets/images'
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='navBar'>
        <div className='navBar__image'>
            <img src={myflix} alt='Myflix Logo'/>
        </div>
            <ul>
                <li href='#' onClick={() => {navigate("/")}}>Home</li>
                <li href='#' onClick={() => {navigate("/movies")}}>Movies</li>
                <li href='#' onClick={() => {navigate("/series")}}>TV Series</li>
                <li href='#' onClick={() => {navigate("/docs")}}>Documentaries</li>
            </ul>
        <div className='navBar__user' onClick={() => {
            if(localStorage.getItem("user") == null){
                navigate('/login');
            }
        }}>
            <img src={regularUser} alt='Regular User'/>
        </div>
    </div>
  )
}

export default Navbar;
