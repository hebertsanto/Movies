import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Components/Header';
import { LayoutStyle } from './style';

export const Layout = () => {
  return(
    <LayoutStyle>
      <Header />
      <Outlet />

    </LayoutStyle>
  );
};
