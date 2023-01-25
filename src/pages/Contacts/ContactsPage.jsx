import { useSelector } from 'react-redux';

import authSelectors from 'redux/auth/auth-selectors';

import {
  PhonebookContainer,
  MainContainer,
} from 'pages/Contacts/Contacts.styled';

import Loader from 'components/Loader/Loader';
import SideBar from 'components/SideBar/SideBar';
import ContactsBook from 'components/ContactsBook/ContactsBook';
import Footer from 'components/Footer/Footer';

export default function ContactsPage() {
  const isFetchingCurrentUser = useSelector(authSelectors.getFetchingCurrent);
  return (
    <>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <PhonebookContainer>
          <MainContainer>
            <SideBar />
            <ContactsBook />
          </MainContainer>
        </PhonebookContainer>
      )}
      <Footer />
    </>
  );
}
