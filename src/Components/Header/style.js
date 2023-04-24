import styled from 'styled-components';

export const HeaderStyle = styled.header`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    width: 100%;
    backdrop-filter: blur(18px);
    background: #060d17d7;
    z-index: 1000;
    border-bottom: 1px solid black;
    color:#fff;

    div > input{
        padding-left:15px;
        outline: none;
        color: #fff;
        border: none;
        background-color:#10161d;
        border-radius: 5px;
         width: 600px;
         height: 50px;
         font-size:1rem;
    }
    div > a{
        text-decoration: none;
    }
    div >a > h2{
        color: gainsboro;
    }
    img{
        cursor: pointer;
        height: 50px;
        object-fit: cover;
        width: 100px;
    }
`;
