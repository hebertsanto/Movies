import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiKey } from '../../api';
import { ContainerDetails, ImageDetails, Overview, MainContainer } from './style';
import { ModalLanguage } from '../ModalLangauge';


export const DetailsPerson = () => {
  const [ personId, setPersonId ] = useState([]);
  const [ movieLanguage, setMovieLanguage ] = useState(false);

  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  const { id } = useParams();
  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}&language=en-US&page=4`)
      .then(response => setPersonId(response.data))
      .catch(err => err);
  }, [ id ]);
  
  function handleClickOpenMovieLanguage(){
    setMovieLanguage(!movieLanguage);
  }
  
  return (
    <MainContainer>
      <ContainerDetails>
        <h1>details</h1>
        <ImageDetails src={`${imageUrl}${personId.profile_path}`} alt={personId.name} />
      </ContainerDetails>
      <Overview>
        <h3>{personId.name}</h3>
        <Link to='#' onClick={handleClickOpenMovieLanguage}>see name in another language</Link>
        <p>{personId.biography}</p>
        <p>Local nascimento: {personId.place_of_birth}</p>
        <p>depatarmento: {personId.known_for_department}</p>
        {movieLanguage && <ModalLanguage data={personId.also_known_as}/>}
      </Overview>
    </MainContainer>
  );
};
