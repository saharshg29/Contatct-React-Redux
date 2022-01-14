import { CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT } from "../constants";

export const addContact = (contact) => ({
  type: CREATE_CONTACT,
  paylaod: contact,
});

// get a contact

export const getContactc = (id) => ({
  type: GET_CONTACT,
  paylaod: id,
});

// UPDAATE A CONTACT

export const upddateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});
