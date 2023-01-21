//import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'modern-normalize';

// import { NotificationContainer } from 'react-notifications';
// import 'react-notifications/lib/notifications.css';
// import Footer from 'components/Footer/Footer';

import SignUpPage from 'pages/SignUp/SignUpPage';
import SignInPage from 'pages/SignIn/SignInPage';
//const SignInPage = lazy(() => import('pages/SignIn/SignInPage'));
//const SignUpPage = lazy(() => import('pages/SignUp/SignUpPage'));
//const Contacts = lazy(() => import('pages/Contacts/Contacts'));

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        {/* <Route path="/login" element={<SignInPage />} /> */}
        <Route path="/register" element={<SignUpPage />} />
        {/* <Route path="/contacts" element={<Contacts />} /> */}
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
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
