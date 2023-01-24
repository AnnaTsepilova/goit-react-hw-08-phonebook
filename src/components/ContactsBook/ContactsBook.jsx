import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import ContactsList from 'components/ContactsList/ContactsList';
import {
  ContactsBookWrapper,
  SubTitle,
} from 'components/ContactsBook/ContactsBook.styled';

//-=-=-=-REDUX-=-=-=-
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { setFilterContact } from 'redux/filterSlice';
import { selectError, selectIsLoading } from 'redux/selectors';

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export default function ContactsBook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsBookWrapper>
      <SubTitle>Contacts</SubTitle>
      <Filter filterByName={payload => dispatch(setFilterContact(payload))} />
      {isLoading && !error ? <Loader /> : <ContactsList />}
    </ContactsBookWrapper>
  );
}

ContactsBook.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  contactDeleteHandler: PropTypes.func,
  formSubmitHandler: PropTypes.func,
  handleFilter: PropTypes.func,
  getFilteredContacts: PropTypes.func,
};
