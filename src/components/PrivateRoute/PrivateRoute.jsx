import { useSelector } from 'react-redux';
import { Route, redirect, useSearchParams } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

export default function PrivateRoute({ redirectTo, children, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>{isLoggedIn ? children : redirect('/login')}</Route>
  );
}
