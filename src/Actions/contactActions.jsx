import {
  CREATE_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  CLEAR_CONTACT,
  DELETE_SELECTED_CONTACTS,
} from "../constants";

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

// DELETE A CONTACT

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

// select all contacts

export const selectAllContact = (id) => ({
  type: SELECT_CONTACT,
  payload: id,
});

// clear selection

export const clearAllContact = () => ({
  type: CLEAR_CONTACT,
});

// DELETE SELECTED CONTACTS
export const deleteAllContact = () => ({
  type: DELETE_SELECTED_CONTACTS,
});
