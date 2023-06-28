import React from 'react';

import { ContactForm } from '../../components/ContactForm/ContactForm.jsx';
import Filter from '../../components/Filter/Filter.jsx';
import { ToastContainer } from 'react-toastify';
import { ContactList } from '../../components/ContactList/ContactList.jsx';
import {
  Container,
  FilterContainer,
  Section,
  TitleH1,
  TitleH2,
} from './PhoneBook.styled.js';

const PhoneBookPage = () => {
  return (
    <Container>
      <Section title="Phonebook">
        <TitleH1>Phonebook</TitleH1>
        <ContactForm />

        <FilterContainer>
          <TitleH2>Contacts</TitleH2>
          <Filter />

          <ContactList />
        </FilterContainer>
      </Section>
      <ToastContainer />
    </Container>
  );
};
export default PhoneBookPage;
