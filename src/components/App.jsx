import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'modern-normalize';
import * as authOperations from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const Layout = lazy(() => import('components/Layout/Layout'));
const HomePage = lazy(() => import('pages/Home/HomePage'));
const LogInPage = lazy(() => import('pages/LogIn/LogInPage'));
const SignUpPage = lazy(() => import('pages/SignUp/SignUpPage'));
const ContactsPage = lazy(() => import('pages/Contacts/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            <Route path="/" element={<PublicRoute restricted />}>
              <Route path="/login" element={<LogInPage />} />
              <Route path="/register" element={<SignUpPage />} />
            </Route>

            <Route path="/" element={<PrivateRoute />}>
              <Route path="/contacts" element={<ContactsPage />} />
            </Route>

            <Route path="*" element={<Navigate to={'/'} />} />
          </Route>
        </Routes>
      </Suspense>
      <NotificationContainer />
    </>
  );
}
