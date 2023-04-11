import styled from 'styled-components';

export const ContainerDetailsMovie = styled.div`
    justify-content: center;
    padding-top: 12vh;
    height: 100vh;
    display: flex;
    flex-wrap: nowrap;

`;

export const ContainerImage = styled.div`

`;

export const Details = styled.div`
  margin-top: 20px;
  margin-left: 30px;
  width: 50vw;
  height: 50vh;
  p{
    margin-top: 7px;
    font-style: italic;
  }
`;
export const Overview = styled.div`
margin-top: 10px;
    h3{
       color:rgba(10, 10, 10, 0.96);
    }
    p{
      margin-top: 7px;
      font-style: normal;
      color: rgba(0, 0, 0, 0.90);
    }
`;
export const ImageInital = styled.img`
    border-radius: 10px;
     object-fit: cover;
     width: 310px;
     object-fit: cover;
`;
