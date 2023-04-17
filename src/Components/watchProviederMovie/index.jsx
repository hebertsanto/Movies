import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiKey } from '../../api';
import { useParams } from 'react-router-dom';
import { ProviderItem, ProviderContainer } from './style';


export const WatchProviderMovie = () => {
  const { id } = useParams();
  const [ provider, setProvider ] = useState([]);
  const imageUrl = 'https://image.tmdb.org/t/p/w500/';
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${apiKey}`)
      .then(res => setProvider(res.data.results.CA.buy))
      .catch(err => console.log(err));
  }, [ id ] );

  return(
    <div>
      <h1 style={{ color :'rgb(185, 189, 204)' , fontSize:'1.5rem', margin:'10px 0px' }}>stream</h1>
      <ProviderContainer>
        {provider?.map(provider => 
          <ProviderItem key={provider.provider_id}>
            <div>
              <img src={`${imageUrl}${provider.logo_path}`}/>
            </div>
          </ProviderItem>
        )}
      </ProviderContainer>
    </div>
  );

};
