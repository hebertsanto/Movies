import React from 'react';
import { HeaderStyle } from './style';
import { Navigation } from '../Navigation';
import { Link } from 'react-router-dom';

export const Header = () => {
  return(
    <HeaderStyle>
      <div>
        <Link to='/'><h2>Films</h2></Link>
      </div>
      <Navigation />
      <div>
        <input type="search" placeholder='pesquise por filmes'/>
      </div>
    </HeaderStyle>
  );
};
