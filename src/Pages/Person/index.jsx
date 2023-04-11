import React, { useState } from 'react';
import axios from 'axios';
import { apiKey } from '../../api';
import { ContainerPeople, ContainerItem, MainContainer } from './style';
import { Link } from 'react-router-dom';


export const PeopleContainer = () => {
  const [ people, setPeople ] =useState([]);

  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then(response => setPeople(response.data.results))
    .catch(err => err);
     
  return(
    <MainContainer>
      <h2>person popular</h2>
      <ContainerPeople>
        {people.map(person => 
          <ContainerItem key={person.name}>
            <Link to={`/people/${person.id}`}>
              <img src={`${imageUrl}${person.profile_path}`} height='300px'/>
              <h3>{person.name}</h3>
            </Link>
          </ContainerItem>
        )}
      </ContainerPeople>
    </MainContainer>
  );
};
