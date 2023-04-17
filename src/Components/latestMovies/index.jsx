import React, { useEffect } from 'react';
import axios from 'axios';
//import { apiKey } from '../../api';


export const LatestMovies = () => {


  useEffect(() => {
    axios.get()
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }, []);

  return(
    <div>
      <h1>latest Movies</h1>
    </div>
  );

};
