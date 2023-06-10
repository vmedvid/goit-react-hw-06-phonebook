import { Form, Label, Input, Button } from './ContactForm.styled';
import { addContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const newContact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };

    dispatch(addContact(newContact));

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name{' '}
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label htmlFor="number">
        Phone number{' '}
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
