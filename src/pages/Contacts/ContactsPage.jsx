import {
  PhonebookContainer,
  MainContainer,
} from 'pages/Contacts/Contacts.styled';

import SideBar from 'components/SideBar/SideBar';
import ContactsBook from 'components/ContactsBook/ContactsBook';
import Footer from 'components/Footer/Footer';

export default function ContactsPage() {
  return (
    <>
      <PhonebookContainer>
        <MainContainer>
          <SideBar />
          <ContactsBook />
        </MainContainer>
      </PhonebookContainer>
      <Footer />
    </>
  );
}
