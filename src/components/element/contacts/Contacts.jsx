import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Contact from "./Contact";
import {
  selectAllContact,
  clearAllContact,
  deleteAllContact,
} from "../../../Actions/contactActions";

export default function Contacts() {
  const [selectAll, setselectAll] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const selectedContacts = useSelector(
    (state) => state.contacts.selectedContacts
  );

  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllContact(contacts.map((contact) => contact.id)));
    } else {
      dispatch(clearAllContact());
    }
  }, [selectAll]);

  console.log("Contacts is  rendering");

  return (
    <div>
      {selectedContacts.length > 0 ? (
        <button
          onClick={() => dispatch(deleteAllContact())}
          className="btn btn-danger mb-3"
        >
          Delete All
        </button>
      ) : null}
      <table className="table shadow">
        <thead className="bg-danger text-normal">
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  className="custom-control-input"
                  value={selectAll}
                  onClick={() => setselectAll(!selectAll)}
                />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contact
              contact={contact}
              // key={contact.id}
              selectAll={selectAll}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
