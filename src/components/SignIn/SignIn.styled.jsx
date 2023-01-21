import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

export const GithubLogo = styled(BsGithub)`
  margin-left: 2px;
  color: #9c27b0;
  width: 24px;
  height: 24px;
  border-radius: 50%;

  vertical-align: middle;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 0 0 13px 3px #9c27b0;
    transform: scale(1.3);
  }
`;

export const SignUpLink = styled(NavLink)`
  margin: 0;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  color: #1976d2;
  -webkit-text-decoration: underline;
  text-decoration: underline;
  text-decoration-color: rgba(25, 118, 210, 0.4);
`;
