import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';

export const HeaderBar = styled(AppBar)`
  box-shadow: none !important;
`;

export const LogoTitle = styled(NavLink)`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 36px;
  font-size: ${props => props.theme.fontSizes.xl}px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: #fff;
  letter-spacing: 0.03em;
  text-decoration: none;
`;

export const HeaderNavBtn = styled(NavLink)`
  width: 100px;
  padding: 10px 12px;
  margin-left: 20px;

  color: inherit;
  background-color: #9c27b0;
  outline: 0;
  border: 0;
  border-radius: 4px;

  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  vertical-align: middle;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    color: #9c27b0;
    background-color: #fff;
  }
`;

export const LogOutBtn = styled(HeaderNavBtn)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 130px;
`;

export const HeaderBtnWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  margin-right: 60px;
  align-items: center;
`;

export const UserName = styled.p`
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.04em;
`;
