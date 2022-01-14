import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../../Store";
import { useNavigate } from "react-router-dom";

export default function AddContact() {
  let history = useNavigate();
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");

  const createContact = (e) => {
    e.preventDefault();
    const newContact = {
      name: Name,
      email: Email,
      phone: Phone,
    };
    dispatch(addContact(newContact));
    history.push("/");
  };

  return (
    <>
      <div className="shadow">
        <h1>add a contact</h1>
      </div>
      <form onSubmit={(e) => createContact(e)}>
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

          <button className="btn btn-primary" type="submit">
            Create a Contact
          </button>
        </div>
      </form>
    </>
  );
}
