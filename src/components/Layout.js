import React from "react";
import Navbar from "./Navbar";
import '../styles/global.css';

const Layout = (props) => {
  return (
    <div className="layout">
      <Navbar></Navbar>
      <div className="content">
        {props.children}
      </div>
      <footer>
        <p>Copyright 2023 - Pedro Henestroza</p>
      </footer>
    </div>
  );
};

export default Layout;
