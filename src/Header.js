import React from "react";
import "./App.css";
import logo from "./nav-logo-small.png";

function Header() {
  return (
    <div className="header">
      <div className="contact">
        <div>
          <span>اتصل بنا الآن</span>
          <br />
          <strong>8476 787 50 971+</strong>
        </div>
        <i className="fas fa-phone"></i>
      </div>
      <nav className="nav-menu">
        <h1>نظام حجز المواعيد</h1>
      </nav>
      <div className="logo">
        <a href="https://mutabaacentre.com/index.html">
          <img src={logo} alt="شعار متابعه" />
        </a>
      </div>
    </div>
  );
}

export default Header;
