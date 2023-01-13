import { useSelector, useDispatch } from 'react-redux';

import { getContacts } from 'redux/contacts/contacts-selectors';
import { deleteContact } from 'redux/contacts/contacts-operations';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <p>{contact.name}</p>
            <p>Phone number: {contact.phone}</p>
            <button onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
