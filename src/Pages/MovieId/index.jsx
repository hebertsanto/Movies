import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {  useParams } from 'react-router-dom';
import { apiKey } from '../../api';
import { ContainerDetailsMovie, SubContainerDetails, Details, Overview, ImageInital ,SubContainer } from './style';
import { MoviesSimilar } from '../../Components/moviesSimilar';
import { WatchProviderMovie } from '../../Components/watchProviederMovie';

export const MovieId = () => {

  const { id } = useParams();
  const [ movieDatails, setMovieDetails ] = useState([]);

  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&page=1`)
      .then(response => {
        setMovieDetails(response.data);
      })
      .catch(err =>  err);

  }, [ id ]);
  
  return(
    <ContainerDetailsMovie>
      <SubContainer>
        <SubContainerDetails>
          <ImageInital src={`${imageUrl}${movieDatails.poster_path}`}/>
          <Details>
            <h2>{movieDatails.original_title}</h2>
            <p>{movieDatails.tagline}</p>
            <p>{movieDatails.release_date}</p>
            <Overview>
              <h3>sinopse</h3>
              <p>{movieDatails.overview}</p>
              <WatchProviderMovie />
            </Overview>
            <MoviesSimilar />
          </Details>
        </SubContainerDetails>
      </SubContainer>
    </ContainerDetailsMovie>
  );
};
