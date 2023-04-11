import React from 'react';
import propTypes  from 'prop-types';
import { ContainerModal, ImageModal , Image } from './style';
import FocusLock from 'react-focus-lock';

export const ModalMovie = ({ src, closeModal }) => {
  return(
    <FocusLock
      nonBlocking={true}
      lockProps={{
        style: {
          zIndex:1001,
          backdropFilter: 'blur(0.8 px)',
          backgroundColor: 'rgba(3, 3, 3, 0.479)',
          tabindex: '1',
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      }}
    > 
      <ContainerModal>
        <ImageModal>
          <Image src={src}/>
        </ImageModal>
        <div>
          <button onClick={closeModal}>tes</button>
          <h1>detalhes do modal</h1>
        </div>
      </ContainerModal>
    </FocusLock>
  );
};

ModalMovie.propTypes = {
  src: propTypes.any,
  closeModal: propTypes.any
};
