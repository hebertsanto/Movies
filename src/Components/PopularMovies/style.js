import styled from 'styled-components';

export const CardMovies = styled.div`
width: 190px;
margin: 10px;
height: 330px;
border-radius:6px 5px;
     img{
      &:hover{
        opacity: 0.8;
        transition: 100ms;
      }
         object-fit:cover;
         width: 190px;
         height: 260px;
         border-radius: 6px;
     }
     h2{
      color:  rgba(240, 240, 240, 0.9);
      margin-left: 10px;
      margin-bottom: 10px;
      font-size: 0.9rem;
     }
     p{
      font-size: 0.7rem;
      margin-left: 10px;
      color:  #fff;
     }
`;
export const ContainerMovies = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  margin-left: 80px;
  a{
    text-decoration: none;
    color:  #060d17;
    display: block;
  }
`;
