import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: auto;
  margin-top: 40px;
  margin-bottom: 16px;
  padding: 6px 20px;

  cursor: pointer;

  text-decoration: none;
  vertical-align: middle;
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.75;
  letter-spacing: 0.02rem;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 16px;
  border-radius: 4px;

  color: #fff;
  background-color: #1976d2;
  outline: 0;
  border: 0;

  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: #1565c0;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
`;
