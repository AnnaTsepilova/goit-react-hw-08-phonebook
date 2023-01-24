import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';

import authSelectors from 'redux/auth/auth-selectors';

import AuthNav from 'components/Header/AuthNav';
import UserMenu from 'components/Header/UserMenu';
import { LogoTitle, HeaderBar } from 'components/Header/Header.styled';

export default function Header() {
  const location = useLocation();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <HeaderBar position="static">
      <Toolbar>
        <LogoTitle to={`/`} state={location.state}>
          Phonebook
        </LogoTitle>
        <Link to={`contacts`} state={location.state}>
          Contacts
        </Link>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </HeaderBar>
  );
}
