import styled from 'styled-components';
import TextField from '@mui/material/TextField';

import { Label } from 'components/ContactForm/ContactForm.styled';

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 35px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

export const FilterContactInput = styled(TextField)`
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  background-color: #fff;
`;

export const FilterLabel = styled(Label)`
  text-align: center;
`;
