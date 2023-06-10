import { List } from './ContactList.styled';
import { ContactListItem } from './ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const newList = () => {
    const subString = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(subString)
    );
  };

  const dispatch = useDispatch();
  const handleDeleteBtn = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List>
      {newList().map(contact => (
        <ContactListItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
          onDeleteContact={handleDeleteBtn}
        />
      ))}
    </List>
  );
};
