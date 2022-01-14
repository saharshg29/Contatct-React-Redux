import React from "react";
import Avatar from "react-avatar";

export default function Contact(props) {
  const { contact } = props;
  const { name, phone, email, id } = contact;
  return (
    <tr>
      <th>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" />
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
        <a href="/delete">
          <span className="material-icons text-danger">delete</span>
        </a>
      </td>
    </tr>
  );
}
