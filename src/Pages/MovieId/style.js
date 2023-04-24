import styled from 'styled-components';

export const ContainerDetailsMovie = styled.div`
    height: 100vh;
    height: auto;
    width: 99vw;
    border-radius: 20px;
`;

export const SubContainer = styled.div`
  padding: 40px;
  width: 83vw;
  min-height: 100vh;
  background-color: rgb(6, 13, 23);
  padding-top:12vh;
  margin: 0 auto;
`;
export const SubContainerDetails = styled.div`
   display: flex;
`;
export const Details = styled.div`
  padding: 20px;
  margin-top: 10px;
  margin-left: 30px;
  width: 50vw;
  height: 50vh;
  p{
    color:#b9bdcc;
    margin-top: 7px;
    font-style: italic;
  }
  h2{
    color:#b9bdcc;
  }
`;
export const Overview = styled.div`
margin-top: 2px;
    h3{
      color:#b9bdcc;
    }
    p{
      margin-top: 7px;
      font-style: normal;
      color:#b9bdcc;;
    }
`;
export const ImageInital = styled.img`
     height: 700px;
     object-fit: contain;
     border-radius: 3px;
`;
