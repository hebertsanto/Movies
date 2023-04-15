import React from 'react';
import { HeaderStyle } from './style';
import { Navigation } from '../Navigation';


export const Header = () => {
  return(
    <HeaderStyle>
      <div>
        
      </div>
      <Navigation />
      <div>
        <input type="search" placeholder='pesquise por filmes'/>
      </div>
    </HeaderStyle>
  );
};
