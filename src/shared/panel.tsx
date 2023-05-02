import React from "react";
import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/sidebar";

const Panel = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />

      <main className="ms-5 ps-5">{children}</main>
    </div>
  );
};

export default Panel;
