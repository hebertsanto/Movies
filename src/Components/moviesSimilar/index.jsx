import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiKey } from '../../api';
import { Link, useParams } from 'react-router-dom';
import { MoviesStyle } from './style';

export const MoviesSimilar = () => {
  const { id } = useParams();
  const [ similar, setSimilarMovies ] = useState([]);
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  const similarLimeted = similar.slice(0, 14);
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US&page=1`)
      .then(res =>  setSimilarMovies(res.data.results))
      .catch(err => console.error(err));
  }, [ id ] );
   
  return(
    <div>
      <h1 style={{ color:'rgb(185, 189, 204)', margin:'18px 0px' }}>Você pode também pode gostar</h1>
      <MoviesStyle>
        {similarLimeted?.map(item => 
          <Link  key={item.id} to={`/movie/${item.id}`}>
            <div>
              <img src={`${imageUrl}${item.backdrop_path}`} alt="" />
            </div>
          </Link>
        )}
      </MoviesStyle>
    </div>
  );

};
