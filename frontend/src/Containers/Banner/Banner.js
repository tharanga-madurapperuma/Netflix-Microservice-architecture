import React, {useEffect, useState} from 'react';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import images from '../../assets/bannerImages';
import { useNavigate } from 'react-router-dom';

const Banner = () => {

    const [movie, setMovie] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await fetch('http://localhost:8081/getAllMovies');
            const jsonResult = await result.json();

            const fetchedMovie = jsonResult[
              Math.floor(Math.random() * jsonResult.length)
            ]

          setMovie(fetchedMovie);
          } catch (error) {
            console.log(error)
          }
        }

        fetchData();
    }, []);

    console.log(movie);
    

  return (
    <div className='banner_wrapper'>
      <div className='banner__background' 
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
              ${images[movie.backdrop_path]}
            )`,
            backgroundPosition: "center center",
        }}
      />
      
      <div className='banner__leftGradient'/>
      <div className='banner__topGradient' />
      <div className='banner__bottomGradient' />

      <div className='banner__content'>
        <img src=""></img>
        <h4>Duration: {movie?.watch_time} min</h4>
        <h3>{movie?.vote_average}</h3>
        <h5>{movie?.genres}</h5>
        <h2>{movie?.name}</h2>
        <p>{movie?.overview}</p>
        
        <div className='banner__content-buttons'>
          <button onClick={() => {navigate(`/movieTrailer/${movie.movie_id}`)}} className='banner__content-buttons_watchButton buttons'><FontAwesomeIcon className="icon" icon={faPlay}/>WATCH</button>
          <button className='banner__content-buttons_addListButton buttons'><FontAwesomeIcon className="icon" icon={faPlus}/>ADD LIST</button>
        </div>
      </div>
    </div>
  )
}

export default Banner