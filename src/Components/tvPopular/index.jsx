import React, { useEffect, useState } from 'react';
import { apiKey } from '../../api';
import axios from 'axios';
import { ContainerTv } from './style';

export const PopularTv = () => {
  const [ popularTv, setPopularTv ] = useState([]);

  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  const page = 2;

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=${page}`)
      .then(response =>  setPopularTv(response.data.results))
      .catch(err =>  err);
  }, []);
  return(
    <ContainerTv>
      {popularTv?.map(tv => 
        <div key={tv.id}>
          <img src={`${imageUrl}${tv.backdrop_path}`} />
          <h2>{tv.name}</h2>
        </div>
      )}
    </ContainerTv>
  );

};
