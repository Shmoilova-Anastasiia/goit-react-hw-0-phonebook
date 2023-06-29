import { useDispatch } from 'react-redux';

import { Btn, Item } from './ContactList.styled';
import { deleteContactsThunk } from 'redux/contact/contactOperations';
import { TiDelete } from 'react-icons/ti';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onDelete = contactId => {
    dispatch(deleteContactsThunk(contactId));
  };

  return (
    <>
      <Item>
        <span>{name}:</span>
        <span>{number}</span>
        <Btn type="button" onClick={() => onDelete(id)}>
          <TiDelete size="20" />
        </Btn>
      </Item>
    </>
  );
};
