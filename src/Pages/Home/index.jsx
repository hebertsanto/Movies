import React from 'react';
import { BestRating } from '../../Components/BestRating';
import { HomeStyle } from './style';
import { LatestMovies } from '../../Components/latestMovies';

export const Home = () => {
  return(
    <HomeStyle>
      < BestRating/>
      <LatestMovies />
    </HomeStyle>
  );
};
