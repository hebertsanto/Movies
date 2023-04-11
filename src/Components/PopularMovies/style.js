import styled from 'styled-components';

export const CardMovies = styled.div`
width: 190px;
margin: 10px;
height: 310px;
border-radius:6px 5px;
border: 1px solid rgba(225, 225, 225, 980);
box-shadow:  2px 2px 2px rgba(245, 245 ,245, 989);
&:hover{
  transition: 100ms;
   box-shadow: 2px 3px 4px rgba(225, 225 ,225, 989);
}
     img{
         object-fit:cover;
         width: 190px;
         height: 220px;
         border-radius: 6px;
     }
     h2{
      margin-left: 10px;
      margin-top: 10px;
      margin-bottom: 10px;
      font-weight:bold;
      font-size: 1rem;
     }
     p{
      font-size: 0.9rem;
      margin-left: 10px;
     }
`;
export const ContainerMovies = styled.div`
  width: 50vw;
  display: flex;

  flex-wrap: wrap;
  a{
    text-decoration: none;
    color: black;
    display: block;
  }
`;
