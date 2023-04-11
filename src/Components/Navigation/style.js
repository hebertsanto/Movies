import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyle = styled(Link)`
  color: #f4f4f4;
`;
export const NavStyle = styled.nav`
    display: flex;
    gap : 20px;
    li{
        list-style: none;
        a{
            color: #000;
            text-transform: uppercase;
            text-decoration: none;
            font-size: 0.81rem;
            font-weight: bold;
            &:hover{
                
            }
        }
    }
`;
