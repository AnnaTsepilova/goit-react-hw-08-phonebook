import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import * as authOperations from 'redux/auth/auth-operations';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  HeaderBtnWrapper,
  LogOutBtn,
  UserName,
} from 'components/Header/Header.styled';

import { cleanContacts } from 'redux/contactsSlice';

export default function UserMenu() {
  const location = useLocation();
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <HeaderBtnWrapper>
      <UserName>Welcome, {name}</UserName>
      <LogOutBtn
        to={`login`}
        state={location.state}
        onClick={() => {
          dispatch(cleanContacts());
          dispatch(authOperations.logOut());
        }}
      >
        <LogoutIcon />
        Log out
      </LogOutBtn>
    </HeaderBtnWrapper>
  );
}
