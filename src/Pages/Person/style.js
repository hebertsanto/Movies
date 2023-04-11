import styled from 'styled-components';

export const ContainerPeople = styled.div`

     flex-wrap: wrap;
     min-height: 100vh;
     display: flex;
`;
export const ContainerItem = styled.div`
  margin: 10px;
  &:hover{
    a{
      color:black;
      font-weight: bold;
    }
  }
  img{
     border-radius: 10px;
  }
  a{
    text-decoration: none;
    color: rgba(100, 100, 100);
  }
`;
export const MainContainer = styled.div`
padding-top: 10vh;
h2{
  color: black;
   margin-left: 10px;
}
`;
