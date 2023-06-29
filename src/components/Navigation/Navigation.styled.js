import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 22px;
  font-weight: 700;
  margin-right: 20px;
  font-size: 36px;

  &.active {
    color: #94c784;
  }
`;
