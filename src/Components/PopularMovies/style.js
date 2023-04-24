import styled from 'styled-components';

export const CardMovies = styled.div`
width: 300px;
margin: 10px;
height: 230px;
border-radius:6px 5px;
     img{
         width: 300px;
     }
     h2{
      color:  rgba(240, 240, 240, 0.9);
      margin-bottom: 10px;
      font-size: 1rem;
     }
     p{
      font-size: 0.7rem;
      color:  #fff;
     }
`;
export const ContainerMovies = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  margin-left: 80px;
  padding-top: 2vh;
  a{
    text-decoration: none;
    color:  #060d17;
    display: block;
  }
`;
