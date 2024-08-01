import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./content.css";

const Content = () => {
    const [user, setUser] = useState();
    
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("loggedUser")));
        console.log(localStorage);
    },[]);

    function checkContent(){
        const inputContent = document.getElementById("inputContent").value
        console.log(inputContent);
    }

    return(
        <div className="wrapper__content">
            <Navbar/>
            <div className="content_container">
                <h1>Welcome <span>{user?.name || "guest"}</span></h1>
                <div className="container-box">
                    <label>Choose the content</label><br></br>
                    <select id="inputContent" onChange={checkContent}>
                        <option>Check one of content</option>
                        <option>Movie</option>
                        <option>TV Series</option>
                        <option>Documentary</option>
                    </select>
                    <div className="container-box_addMovie">
                        <form>
                            <label>Enter the film name</label>
                            <input></input>
                        </form>
                    </div>
                    <div className="container-box_addSeries">

                    </div>
                    <div className="container-box_addDoc">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;

/*

public String name;
    public String overview;
    private String[] genres;
    private String backdrop_path;
    private String poster_path;
    public boolean adult;
    public String original_language;
    public String release_date;
    private float vote_average;

    MOVIE
    private String movie_id;
    public int watch_time;

    TVSERIES
     private String series_id;
    public int num_of_seasons;
    public int num_of_episodes;

    DOC
    private String doc_id;
    public int watch_time;
*/