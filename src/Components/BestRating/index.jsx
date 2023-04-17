import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiKey } from '../../api';
import { ContainerRating, SubContainer } from './style';
import { Link } from 'react-router-dom';

export const BestRating= () => {
  const [ rating, setRating ] = useState( [] );
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
      .then(res => setRating(res.data.results))
      .catch(err => console.error(err));
  }, [] );
  
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  return(
    <ContainerRating>
      <h1>the best rating</h1>
      <SubContainer >
        {rating.map(item => 
          <Link to={`/movie/${item.id}`} key={item.id}>
            <img src={`${imageUrl}${item.backdrop_path}`} alt="teste" />
            <h2>{item.original_title}</h2>
            <p>{item.release_date}</p>
          </Link>
        )}
      </SubContainer>
    </ContainerRating>
  );

};
