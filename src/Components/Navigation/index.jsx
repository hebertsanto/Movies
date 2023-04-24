import React from 'react';
import { LinkStyle , NavStyle } from './style';


export const Navigation = () => {

  return( 
    <NavStyle>
      <li><LinkStyle to='/movie'>movies</LinkStyle></li>
      <li><LinkStyle to='/people'>people</LinkStyle></li>
      <li><LinkStyle to='/tv'>tv</LinkStyle></li>
    </NavStyle>
  );
};
