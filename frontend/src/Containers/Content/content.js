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
        switch(inputContent){
            case "Movie":
                document.querySelector(".container-box_addMovie").style.display = "block";
                document.querySelector(".container-box_addDoc").style.display = "none";
                document.querySelector(".container-box_addSeries").style.display = "none";
                break;
            case "TV Series":
                document.querySelector(".container-box_addSeries").style.display = "block";
                document.querySelector(".container-box_addMovie").style.display = "none";
                document.querySelector(".container-box_addDoc").style.display = "none";
                break;
            case "Documentary":
                document.querySelector(".container-box_addDoc").style.display = "block";
                document.querySelector(".container-box_addMovie").style.display = "none";
                document.querySelector(".container-box_addSeries").style.display = "none";
                break;
            default:
                document.querySelector(".container-box_addDoc").style.display = "none";
                document.querySelector(".container-box_addMovie").style.display = "none";
                document.querySelector(".container-box_addSeries").style.display = "none";
        }
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
                            <table className="addMovie-outerTable">
                                <tr>
                                    <table className="addMovie-innerTable">
                                        <tr>
                                            <td>
                                                <label>Movie name</label><br></br>
                                                <input type="text" id="name" requirede></input>
                                            </td>
                                            <td>
                                                <label>Language</label><br></br>
                                                <input type="text" id="original_language" required></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label>Release Date</label><br></br>
                                                <input type="text" id="release_date"required></input>
                                            </td>
                                            <td>
                                                <label>Trailer</label><br></br>
                                                <input type="text" id="trailer" required></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label>Backdrop path</label><br></br>
                                                <input type="text" id="backdrop_path" required></input>
                                            </td>
                                            <td>
                                                <label>Poster Path</label><br></br>
                                                <input type="text" id="poster_path" required></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label>Watch Time</label><br></br>
                                                <input type="text" id="watch_time" required></input>
                                            </td>
                                            <td>
                                                <label>Vote Average</label><br></br>
                                                <input type="text" id="vore_average" required></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <label>Adult</label><br></br>
                                                <select id="adult">
                                                    <option selected>Choose True or False</option>
                                                    <option>True</option>
                                                    <option>False</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </table>
                                </tr>
                                <tr>
                                    <label>Overview</label><br></br>
                                    <textarea></textarea>
                                </tr>
                            </table>
                            
                        </form>
                    </div>
                    <div className="container-box_addSeries">
                    <form>
                            <table className="addMovie-outerTable">
                                <tr>
                                    <table className="addMovie-innerTable">
                                        <tr>
                                            <td>
                                                <label>TV Series name</label><br></br>
                                                <input required></input>
                                            </td>
                                            <td>
                                                <label>Language</label><br></br>
                                                <input required></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label>Language</label><br></br>
                                                <input required></input>
                                            </td>
                                            <td>
                                                <label>Trailer</label><br></br>
                                                <input required></input>
                                            </td>
                                        </tr>
                                    </table>
                                </tr>
                                <tr>
                                    <label>Overview</label><br></br>
                                    <textarea></textarea>
                                </tr>
                            </table>
                            
                        </form>
                    </div>
                    <div className="container-box_addDoc">
                    <form>
                            <table className="addMovie-outerTable">
                                <tr>
                                    <table className="addMovie-innerTable">
                                        <tr>
                                            <td>
                                                <label>Documentary name</label><br></br>
                                                <input required></input>
                                            </td>
                                            <td>
                                                <label>Language</label><br></br>
                                                <input required></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label>Language</label><br></br>
                                                <input required></input>
                                            </td>
                                            <td>
                                                <label>Trailer</label><br></br>
                                                <input required></input>
                                            </td>
                                        </tr>
                                    </table>
                                </tr>
                                <tr>
                                    <label>Overview</label><br></br>
                                    <textarea></textarea>
                                </tr>
                            </table>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;