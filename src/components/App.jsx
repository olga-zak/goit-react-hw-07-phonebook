import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchContacts } from 'redux/contacts/contacts-operations';

import { Button } from './Button/Button';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {
  const [isContactsListShown, setIsContactsListShown] = useState(false);
  const dispatch = useDispatch();

  //showContactsList - запрос на сервер за контактами + показать эти контакты
  const showContactsList = () => {
    setIsContactsListShown(true);
    dispatch(fetchContacts());
  };
  return (
    <>
      {isContactsListShown ? (
        <ContactsList />
      ) : (
        <Button text="Show contacts" clickHandler={showContactsList} />
      )}
    </>
  );
};

//https://63c08c2c3e974879a75d623e.mockapi.io/phonebook/contacts
