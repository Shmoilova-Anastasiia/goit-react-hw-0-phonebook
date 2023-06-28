import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContacts = () => {
  return axios.get('/contacts/');
};

export const deleteContacts = id => {
  return axios.delete(`/contacts/${id}`);
};

export const addContacts = data => {
  return axios.post('/contacts/', data);
};
