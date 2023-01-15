import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/contacts/contacts-operations';
import { getIsLoading, getError } from 'redux/contacts/contacts-selectors';

import { Button } from './Button/Button';
import { ContactsList } from './ContactsList/ContactsList';
import { AddForm } from './AddForm/AddForm';
import { FilterForm } from './FilterForm/FilterForm';
import { Loader } from './Loader/Loader';

import { Wrapper, FormsWrapper } from './App.styled';

export const App = () => {
  const [isContactsListShown, setIsContactsListShown] = useState(false);
  const [isAddFormShown, setIsAddFormShown] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  //showContactsList - запрос на сервер за контактами + показать эти контакты
  const showContactsList = () => {
    setIsContactsListShown(true);
    dispatch(fetchContacts());
  };

  const showAddForm = () => {
    setIsAddFormShown(true);
  };

  const closeAddForm = () => {
    setIsAddFormShown(false);
  };

  return (
    <>
      {isContactsListShown ? (
        <>
          {isLoading && <Loader />}
          <Wrapper>
            {!isLoading && <ContactsList />}

            <FormsWrapper>
              {!isLoading && !error && (
                <>
                  <FilterForm />
                  {!isAddFormShown && (
                    <Button text="Add Contact" clickHandler={showAddForm} />
                  )}
                </>
              )}
              {isAddFormShown && !isLoading && (
                <AddForm closeForm={closeAddForm} />
              )}
            </FormsWrapper>
          </Wrapper>
        </>
      ) : (
        <Button text="Show contacts" clickHandler={showContactsList} />
      )}
      {error && <p>eto oshibka {error.message}</p>}
    </>
  );
};
