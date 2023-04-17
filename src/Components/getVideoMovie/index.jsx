import React, { useEffect } from 'react';
import axios from 'axios';
import { apiKey } from '../../api';
import { useParams } from 'react-router-dom';
import { ContainerImage } from './style';


export const MovieVideo = () => {
  const { id } = useParams();


  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${apiKey}&language=en-US`)
      .then(response => console.log(response))
      .catch(err => console.error(err));

  }, [ id ] );

  return(
    <ContainerImage>
      <h1>Imagem do filme</h1>
    </ContainerImage>
  );

};
