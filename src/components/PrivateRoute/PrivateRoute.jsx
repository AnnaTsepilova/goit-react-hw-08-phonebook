import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

export default function PrivateRoute() {
  const token = useSelector(authSelectors.getToken);
  return token ? <Outlet /> : <Navigate to="/login" />;
}
