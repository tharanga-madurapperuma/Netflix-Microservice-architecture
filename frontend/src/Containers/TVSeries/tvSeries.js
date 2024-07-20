import React from "react";
import "./tvSeries.css"
import Navbar from "../../Components/Navbar/Navbar";
import { poster6, poster7, poster8, poster9, poster10} from "../../assets/images"; 

const TVSeries = () => {
    return(
        <div className="wrapper__tvSeries">
            <Navbar />
            <div className="tvSeries-heading">
                <h1>TV Series</h1>
            </div>
            {/* <div className="movie-trailer">
                <iframe width="650" height="365" src="https://www.youtube.com/embed/XtFI7SNtVpY?si=cvxRUiy8YrDK3QV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div> */}
            <div className="tvSeries_scroll-wrapper">
                
                <div className="scroll-content">
                    <img src={poster6} alt="poster"/>
                    <img src={poster7} alt="poster"/>
                    <img src={poster8} alt="poster"/>
                    <img src={poster9} alt="poster"/>
                    <img src={poster10} alt="poster"/>
                    <img src={poster6} alt="poster"/>
                    <img src={poster7} alt="poster"/>
                    <img src={poster8} alt="poster"/>
                    <img src={poster9} alt="poster"/>
                    <img src={poster10} alt="poster"/>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default TVSeries;