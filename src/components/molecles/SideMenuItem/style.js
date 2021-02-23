import styled from 'styled-components/macro';
import {Link} from 'react-router-dom';
export const SideMenuItemWrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  & > h6 {
    color: ${({ color }) => color};
    margin-left:1rem;

  }
`

export const SideMenuItemContainer = styled.div`
  display:flex;
  align-items:center;
  background-color:${({background}) => background};
  border-left:${props=> props.border && '11px  solid #5584FF'};
  padding:2rem;
  & > a {
    text-decoration: none;
  }
  
`
