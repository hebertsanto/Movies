import React, { useEffect, useState } from 'react';
import { apiKey } from '../../api';
import axios from 'axios';
import { CardMovies, ContainerMovies } from './style';
import { Link } from 'react-router-dom';


export const PopularMovies = () => {
  const [ popularMovie, setPopularMovie ] = useState([]);
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=4`)
      .then(response => setPopularMovie(response.data.results))
      .catch(err =>  err);
  }, []);

  return(
    <ContainerMovies>
      {popularMovie.map(movie =>
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <CardMovies>
            <img src={`${imageUrl}${movie.backdrop_path}`} alt="imageMovie"/>
            <h2>{movie.title}</h2>
            <p>{movie.release_date}</p>
          </CardMovies>
        </Link>
      )}
    </ContainerMovies>
  );
};
