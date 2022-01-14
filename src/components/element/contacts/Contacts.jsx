import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";

export default function Contacts() {
  const contacts = useSelector((state) => state.contacts);
  console.log("Contacts is  rendering");
  return (
    <div>
      <table className="table shadow">
        <thead className="bg-danger text-normal">
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" />
                <label className="custom-control-label"></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.contacts.map((contact) => (
            <Contact contact={contact} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
