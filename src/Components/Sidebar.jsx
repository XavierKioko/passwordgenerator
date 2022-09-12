import React from "react";
import key from "../assets/key.png";
import "../index.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo side"></div>
      <div className="words">
        <p className="word" id="active">
          Passwords
        </p>
        <p className="word">Security</p>
        <p className="word">Cryptograpy</p>
      </div>
        <img src={key} alt="key icon" className="key-icon" />
    </div>
  );
}
