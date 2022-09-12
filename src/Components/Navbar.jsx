import React from "react";
import "../index.css";

export default function Navbar() {
  return (
    <div className="the-nav">
      <div className="nav-items">
        <p>About</p>
        <p>Contacts</p>
        <p>Downloads</p>
      </div>
      <div className="nav-items">
        <p>Saved passwords</p>
        <p>2FA-codes</p>
      </div>
    </div>
  );
}
