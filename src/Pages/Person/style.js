import styled from 'styled-components';

export const ContainerPeople = styled.div`
     margin-left: 100px;
     flex-wrap: wrap;
     min-height: 100vh;
     display: flex;
`;
export const ContainerItem = styled.div`
  margin: 6px;
  &:hover{
    h3{
      color: #fff;
    }
  }
  h3{
    margin-left: 10px;
    color:rgba(150, 150, 150, 0.98);
  }
  img{
     border-radius: 10px;
  }
`;
export const MainContainer = styled.div`
padding-top: 10vh;
h2{
    color: gray;
    margin-top: 10px;
    margin-bottom: 20px;
   margin-left: 100px;
}
`;
