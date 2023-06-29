import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, getContacts } from 'api/contactApi';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data: result } = await addContacts(contact);
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContacts(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
