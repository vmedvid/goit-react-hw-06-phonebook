import PropTypes from 'prop-types';
import { ListItem } from './ContactListItem.styled';
import { ContactDeleteBtn } from './ContactDeleteBtn.styled';

export const ContactListItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <ListItem>
      {name}: {number}
      <ContactDeleteBtn type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </ContactDeleteBtn>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
