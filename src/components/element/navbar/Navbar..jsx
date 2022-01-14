import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <div className="navbar navbar-expand-sm shadow fixed-top navbar-dark bg-primary">
        <div className="container">
          <Link to='/list' className="navbar-brand">
            Contact Book
          </Link>
          <div>
            <Link to='/add' className="btn btn-normal ">
              Create Contacts
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
