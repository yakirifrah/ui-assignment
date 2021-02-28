import styled,{css} from 'styled-components/macro';
import { Link } from 'react-router-dom';
export const SideMenuItemWrapper = styled(Link)`
  display: flex;
  flex-direction: row;

  & > h6 {
    color: ${({ color }) => color};
    margin-left: 1rem;
    ${props => props.open && css`
      margin-left: 2rem;
  `}
  }
`;

export const SideMenuItemContainer = styled.div`
  &:hover {
    background: #122143;
  }
  display: flex;
  align-items: center;
  background-color: ${({ active }) => (active ? '#122143' : '')};
  border-left: ${({ active }) => active && '0.6875rem  solid #5584FF'};
  opacity: ${({ active }) => active && 1};
  //border-left:${(props) => props.border && '0.6875rem  solid #5584FF'};
  padding: 2rem;
  & > a {
    text-decoration: none;
  }
  ${props => props.open && css`
      padding-left:26px;
  `}
`;
