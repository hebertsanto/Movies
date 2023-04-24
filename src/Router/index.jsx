import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { Layout } from '../layout';
import { Global } from '../styleGlobal';
import { Movie } from '../Pages/Movie';
import { MovieId } from '../Pages/MovieId';
import { PeopleContainer } from '../Pages/Person';
import { DetailsPerson } from '../Components/PersonDetail';
import { Home } from '../Pages/Home';
import { PopularTv } from '../Components/tvPopular';

export const Router  = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/movie' element={<Movie/>}/>
          <Route  path='/movie/:id' element={<MovieId />}/>
          <Route  path='/people' element={<PeopleContainer />}/>
          <Route  path='/people/:id' element={<DetailsPerson />}/>
          <Route  path='/tv' element={<PopularTv />}/>
        </Route>
      </Routes>
      <Global />
    </BrowserRouter>

  );
};

