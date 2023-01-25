import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import {
  ContactRow,
  Name,
  Phone,
  ContactCard,
  ContactAvatar,
  ButtonGroup,
  DeleteButton,
  IconDelete,
} from 'components/ContactsList/ContactItem/ContactItem.styled';

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    Notify.success('Contact is deleted', {
      fontSize: '16px',
      width: '350px',
    });
    dispatch(deleteContact(contact.id));
  };

  //-=-=-=-=-=-=-=-=- Letter Avatar -=-=-=-=-=-=-=-=-=-

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    let nameArr = name.split(' ');
    let firstName = nameArr[0][0];
    let lastName = nameArr[1] ? nameArr[1][0] : nameArr[0][1];

    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 60,
        height: 60,
        fontSize: 26,
      },
      children: `${firstName}${lastName}`,
    };
  }

  //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  return (
    <ContactRow>
      <ContactCard>
        <ContactAvatar {...stringAvatar(contact.name)} alt={contact.name} />
        <Name>{contact.name}</Name>
        <Phone>{contact.number}</Phone>
        <ButtonGroup>
          <DeleteButton type="button" onClick={handleDelete}>
            Delete
            <IconDelete />
          </DeleteButton>
        </ButtonGroup>
      </ContactCard>
    </ContactRow>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
};
