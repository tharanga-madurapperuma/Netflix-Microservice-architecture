import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./content.css";

const Content = () => {
    return(
        <div className="wrapper__content">
            <Navbar/>
            <div className="content_container">
                <h1>Welcome <span>Tharanga</span></h1>
                <div className="container-box">
                    <label>Choose the content</label><br></br>
                    <select>
                        <option>Movie</option>
                        <option>TV Series</option>
                        <option>Documentary</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Content;