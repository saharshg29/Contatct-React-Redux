import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactc, upddateContact } from "../../../Actions/contactActions";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function EditContact() {
  let { id } = useParams();
  let history = useNavigate();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact.contact);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");

  console.log("edit contacts rendered");

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
    }
    dispatch(getContactc(id));
  }, [contact]);

  const onUpdateContact = (e) => {
    e.preventDefault();

    const update_contact = Object.assign(contact, {
      name: Name,
      phone: Phone,
      email: Email,
    });

    dispatch(upddateContact(update_contact))
    history('/list')
    console.log(update_contact);
  };

  return (
    <>
      <div className="shadow">
        <h1>Edit</h1>
      </div>
      <form onSubmit={(e) => onUpdateContact(e)}>
        <div className="card">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Enter Phone Number"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            className="btn btn-primary"
            type="submit"
            onClick={() => {
              console.log("form submitter");
            }}
          >
            Create a Contact
          </button>
        </div>
      </form>
    </>
  );
}
