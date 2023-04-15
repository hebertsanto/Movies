import styled from 'styled-components';

export const HeaderStyle = styled.header`
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    width: 100%;
    backdrop-filter: blur(18px);
    background: #060d17d7;
    color:#fff;
    div{
        color: #fff;
        font-size:1.3rem;
    }
    div > input{
        padding-left:10px;
        outline: none;
        color: #fff;
        border: none;
        background-color:#10161d;
         width: 600px;
         height: 40px;
    }
    div > h3{
        color: #fff;
    }
    img{
       cursor: pointer;
        height: 50px;
        object-fit: cover;
        width: 100px;
    }
`;
