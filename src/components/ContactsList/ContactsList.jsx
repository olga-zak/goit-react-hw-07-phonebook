import { useSelector } from 'react-redux';

import { getContacts } from 'redux/contacts/contacts-selectors';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <p>{contact.name}</p>
            <p>Phone number: {contact.phone}</p>
            <button>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
