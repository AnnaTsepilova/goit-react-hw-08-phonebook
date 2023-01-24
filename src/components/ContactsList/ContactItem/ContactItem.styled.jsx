import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components';

import { Button } from 'components/ContactForm/ContactForm.styled';

export const ContactCard = styled.div`
  position: relative;
  height: 270px;
  justify-content: center;
  text-align: center;
  padding: 25px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0px 0px 4px 2px rgb(63, 158, 236);
  }
`;

export const ContactRow = styled.li`
  width: 100%;
  margin-right: ${props => props.theme.space[5]}px;
  margin-bottom: 20px;
  margin-left: 20px;
`;

export const Name = styled.h3`
  margin-bottom: ${props => props.theme.space[5]}px;
  font-size: 20px;
  font-weight: 600;
`;

export const Phone = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  color: #212121b9;
`;

export const ContactAvatar = styled(Avatar)`
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonGroup = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 25px;

  margin-top: 25px;
`;

export const DeleteButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;

  width: 45px;
  height: 45px;
  border-radius: 4px;
  background-color: #ef5350;

  /* color: ${props => props.theme.colors.background};
  background-color: #eebf31; */
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px,
    rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #ef5350;
  }
`;

export const IconDelete = styled(DeleteIcon)`
  font-size: 20px;
`;
