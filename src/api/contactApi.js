import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = () => axios.get('/contacts');

export const deleteContacts = id => {
  return axios.delete(`/contacts/${id}`);
};

export const addContacts = contact => axios.post('/contacts', { ...contact });
