import styled from 'styled-components';

export const HeaderStyle = styled.header`
    height: 7vh;
    background-color:rgba(250, 250, 250, .98);
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    width: 100%;
    box-shadow: 2px 2px 2px rgba(250, 250, 250, .98);
    color: #000;
    border-bottom: 1px solid rgba(240, 240, 240, 0.980);
    backdrop-filter: blur('8px');
    div{
        font-size:1.3rem;
    }
    img{
       cursor: pointer;
        height: 50px;
        object-fit: cover;
        width: 100px;
    }
`;
