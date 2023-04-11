import React from 'react';
import PropTypes from 'prop-types';

export const ModalLanguage = ({ data }) => {
  return(
    <div>
      {data?.map(language => 
        <p key={language}>{language}</p>
      )};
    </div>
  );
};

ModalLanguage.propTypes = {
  data: PropTypes.array
};
