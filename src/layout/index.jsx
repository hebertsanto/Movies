import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Components/Header';
import { LayoutStyle } from './style';
import { FooterContainer } from '../Components/Footer';


export const Layout = () => {
  return(
    <LayoutStyle>
      <Header />
      <Outlet />
      <FooterContainer />
    </LayoutStyle>
  );
};
