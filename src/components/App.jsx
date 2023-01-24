import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'modern-normalize';
import Loader from './Loader/Loader';

// import { NotificationContainer } from 'react-notifications';
// import 'react-notifications/lib/notifications.css';
// import Footer from 'components/Footer/Footer';

const Layout = lazy(() => import('components/Layout/Layout'));
const LogInPage = lazy(() => import('pages/LogIn/LogInPage'));
const SignUpPage = lazy(() => import('pages/SignUp/SignUpPage'));
const ContactsPage = lazy(() => import('pages/Contacts/ContactsPage'));

export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LogInPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/register" element={<SignUpPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<Navigate to={'/'} />} />
          </Route>
        </Routes>
      </Suspense>
      {/* <NotificationContainer /> */}
    </>
  );
}

// import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';

// //-=-=-=-REDUX-=-=-=-
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/operations';
// import { setFilterContact } from 'redux/filterSlice';
// import { selectError, selectIsLoading } from 'redux/selectors';

// //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// import { PhonePageWrapper, PhonebookContainer, Title } from './App.styled';
// import Loader from 'components/Loader/Loader';
// import Section from 'components/Section/Section';
// import ContactForm from 'components/ContactForm/ContactForm';
// import ContactsList from 'components/ContactsList/ContactsList';
// import Filter from 'components/Filter/Filter';
// import Footer from 'components/Footer/Footer';

// export default function App() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <>

//       <PhonePageWrapper>
//         <PhonebookContainer>
//           <Title>Phonebook</Title>
//           <ContactForm />
//           <Section title="Contacts"></Section>
//           <Filter
//             filterByName={payload => dispatch(setFilterContact(payload))}
//           />
//           {isLoading && !error ? <Loader /> : <ContactsList />}
//         </PhonebookContainer>
//       </PhonePageWrapper>
//       <Footer />
//     </>
//   );
// }

// App.propTypes = {
//   contacts: PropTypes.array,
//   filter: PropTypes.string,
//   contactDeleteHandler: PropTypes.func,
//   formSubmitHandler: PropTypes.func,
//   handleFilter: PropTypes.func,
//   getFilteredContacts: PropTypes.func,
// };
