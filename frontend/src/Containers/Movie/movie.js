import React from "react";
import "./movie.css"
import Navbar from "../../Components/Navbar/Navbar";
import { poster1, poster2, poster3, poster4, poster5} from "../../assets/images"; 
import { useNavigate } from "react-router-dom";

const Movie = () => {
    const navigate = useNavigate();

    return(
        <div className="wrapper__movie">
            <Navbar />
            <div className="movie-heading">
                <h1>Movies</h1>
            </div>
            {/* <div className="movie-trailer">
                <iframe width="650" height="365" src="https://www.youtube.com/embed/XtFI7SNtVpY?si=cvxRUiy8YrDK3QV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div> */}
            <div className="movie_scroll-wrapper">
                
                <div className="scroll-content">
                    <img src={poster1} alt="poster" onClick={() => {navigate("/trailer")}}/>
                    <img src={poster2} alt="poster" onClick={() => {navigate("/trailer")}}/>
                    <img src={poster3} alt="poster" onClick={() => {navigate("/trailer")}}/>
                    <img src={poster4} alt="poster" onClick={() => {navigate("/trailer")}}/>
                    <img src={poster5} alt="poster" onClick={() => {navigate("/trailer")}}/>
                    <img src={poster1} alt="poster" onClick={() => {navigate("/trailer")}}/>
                    <img src={poster2} alt="poster" onClick={() => {navigate("/trailer")}}/>
                    <img src={poster3} alt="poster" onClick={() => {navigate("/trailer")}}/>
                    <img src={poster4} alt="poster" onClick={() => {navigate("/trailer")}}/>
                    <img src={poster5} alt="poster" onClick={() => {navigate("/trailer")}}/>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Movie;