import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { deleteContact } from "../../../Actions/contactActions";
import { useDispatch } from "react-redux";

export default function Contact(props) {
  const dispatch = useDispatch();
  const { contact, selectAll } = props;
  const { name, phone, email, id } = contact;
  return (
    <tr>
      <th>
        <div className="custom-control custom-checkbox">
          <input
            checked={selectAll}
            type="checkbox"
            className="custom-control-input"
          />
          <label className="custom-control-label"></label>
        </div>
      </th>
      <td>
        <Avatar name={name} size="40" round={true} className="avatar" />
        {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="Actions">
        <a href={`/edit/${id}`}>
          <span className="material-icons mr-5 ">edit</span>
        </a>

        <span
          className="material-icons text-danger"
          onClick={() => dispatch(deleteContact(id))}
        >
          delete
        </span>
      </td>
    </tr>
  );
}
