import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import './trailer.css';
import { backdrop4 } from "../../assets/images";
import { useParams } from 'react-router-dom';
import movieImages from "../../assets/movie/movieImages";

const Trailer = () => {

    const { movie_id } = useParams();

    const [movie, setMovie] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch(`http://localhost:8081/getMovieById/${movie_id}`);
                setMovie(await result.json());
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return(
        <div className="wrapper__trailer">
            <Navbar />
            <div className="trailer-box">
                <div className="trailer-box_firstSection">
                    <div className="firstSection-left">
                        <iframe width="550" height="320" src="https://www.youtube.com/embed/XtFI7SNtVpY?si=cvxRUiy8YrDK3QV0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="firstSection-middle"></div>
                    <div className="firstSection-right">
                        <img src={movieImages[movie.backdrop_path]} alt="Back Drop"/>
                        <div>
                            <p>{movie.name}</p>
                            <p>{movie.overview}</p> 
                        </div>
                    </div>
                </div>
                <div className="trailer-box_secondSection">
                    <h1 className="secondSection-reviews">Reviews</h1>
                    <p>djh fjkdhfkjdshfkjds fkd kjf dskjf dskj fdksj fkdjs kds kfjd skf dskf dskf dksj fkjd kjds kdkds fkjds hkfj dhskjfh dskjfh dskj fhdkjs hfkjdsh fdkhdfkhdskfdkh fkdjh kdh fkhd kf dhkjf hdkjfh dkj hkjd jk hfkjdh fkjdsh kf dhkfh dskhf dk fdk fkds fk</p>
                    <h2 className="secondSection-addReview">Add a Review</h2>
                    <form>
                        <textarea></textarea>
                        <input type='button' value="Review"></input>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Trailer;

