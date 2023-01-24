import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'modern-normalize';
import Loader from './Loader/Loader';
import * as authOperations from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// import { NotificationContainer } from 'react-notifications';
// import 'react-notifications/lib/notifications.css';
// import Footer from 'components/Footer/Footer';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

const Layout = lazy(() => import('components/Layout/Layout'));
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
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LogInPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/register" element={<SignUpPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            {/* <Route path="/contacts" element={<ContactsPage />} /> */}
            <Route path="*" element={<Navigate to={'/'} />} />
          </Route>
        </Routes>
      </Suspense>
      {/* <NotificationContainer /> */}
    </>
  );
}

// App.propTypes = {
//   contacts: PropTypes.array,
//   filter: PropTypes.string,
//   contactDeleteHandler: PropTypes.func,
//   formSubmitHandler: PropTypes.func,
//   handleFilter: PropTypes.func,
//   getFilteredContacts: PropTypes.func,
// };
