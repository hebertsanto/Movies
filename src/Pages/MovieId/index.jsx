import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { apiKey } from '../../api';
import { ContainerDetailsMovie, ContainerImage, Details, Overview, ImageInital } from './style';
import { ModalMovie } from '../../Components/ModalMovie';
import { FaRegHeart } from 'react-icons/fa';

export const MovieId = () => {

  const { id } = useParams();
  const [ movieDatails, setMovieDetails ] = useState([]);
  const [ modal , setModal ] = useState(false);
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&page=1`)
      .then(response => {
        setMovieDetails(response.data);
      })
      .catch(err =>  err);

  }, [ id ]);
  
  function handleClickModal(){
    setModal(true);
  }
  function handleClickCloseModal(){
    setModal(false);
  }
  return(
    <ContainerDetailsMovie>
      <ContainerImage>
        <Link to='#' onClick={handleClickModal}>
          <ImageInital src={`${imageUrl}${movieDatails.poster_path}`}/>
        </Link>
        {modal && <ModalMovie src={`${imageUrl}${movieDatails.poster_path}`} closeModal={handleClickCloseModal}/>}
      </ContainerImage>
      <Details>
        <h2>{movieDatails.original_title}</h2>
        <p>{movieDatails.tagline}</p>
        <p>{movieDatails.release_date}</p>
        <Overview>
          <h3>sinopse</h3>
          <p>{movieDatails.overview}</p>
          <div>
            adicionar aos favoritos 
            <span><FaRegHeart /></span>
          </div>
        </Overview>
      </Details>
    </ContainerDetailsMovie>
  );
};
