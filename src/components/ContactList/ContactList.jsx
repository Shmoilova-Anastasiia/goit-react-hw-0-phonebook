import React, { Fragment, useEffect } from 'react';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contact/contactSelector';

import { selectFilter } from 'redux/filter/filterSelector';
import { ContactItem } from './ContactItem';
import { getContactsThunk } from 'redux/contact/contactOperations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  // console.log(filterContacts);

  return (
    <>
      {error && !isLoading && <div>Ooops, error...</div>}
      {!filterContacts?.length && !error && !isLoading && (
        <div>Contacts not found</div>
      )}
      {!error && !isLoading && filterContacts?.length > 0 && (
        <List>
          {filterContacts.map(({ name, number, id }) => {
            return (
              <Fragment key={id}>
                <ContactItem name={name} number={number} id={id} />
              </Fragment>
            );
          })}
        </List>
      )}
    </>
  );
};
