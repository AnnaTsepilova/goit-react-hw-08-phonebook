import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

export default function PublicRoute({ restricted = false }) {
  const token = useSelector(authSelectors.getToken);
  const shouldRedirect = token && restricted;
  return shouldRedirect ? <Navigate to="/contacts" /> : <Outlet />;
}
