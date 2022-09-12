import React from "react";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import "./index.css";

export default function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Main />
      </div>
    </div>
  );
}
