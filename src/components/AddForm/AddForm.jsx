import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';

import { Heading, Form, Label, Input } from './AddForm.styled';
import { Button } from 'components/ContactsList/ContactsList.styled';

export const AddForm = ({ closeForm }) => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      addContact({
        name: event.target.elements.name.value,
        phone: event.target.elements.phone.value,
      })
    );
    closeForm();
  };

  return (
    <>
      <Heading>Fill this form to add a new contact:</Heading>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input type="text" name="name" />
        </Label>
        <Label>
          Phone number:
          <Input type="text" name="phone" />
        </Label>
        <Button>Save</Button>
      </Form>
    </>
  );
};
