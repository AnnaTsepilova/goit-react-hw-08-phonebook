import styled from 'styled-components';

import TextField from '@mui/material/TextField';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

export const FormContainer = styled.form`
  padding: 0 20px 25px 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.space[4]}px;
  font-size: 16px;
`;

export const ContactInput = styled(TextField)`
  display: block;
  margin-bottom: 50px;
  padding: 15px 20px;
  font-size: 20px;
  width: 280px;

  border: 1px solid #21212133;
  border-radius: 4px;
  outline: transparent;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${props => props.theme.colors.secondary};

  &:focus {
    border: 1px solid ${props => props.theme.colors.accentColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 16px;
  padding: 10px;
  min-width: 45px;
  width: 280px;
  height: 40px;

  text-align: center;
  border-radius: 4px;
  border-width: 0;
  color: ${props => props.theme.colors.background};
  background-color: #1976d2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;

  cursor: pointer;
  outline: rgba(0, 0, 0, 0);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #1565c0;
    color: #fff;
  }
`;

export const ContactAddIcon = styled(PersonAddAlt1Icon)`
  margin-left: 10px;
`;
