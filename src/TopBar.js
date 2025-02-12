import React from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function TopBar() {
  return (
    <div className="top-bar">
      <div>
        <a href="mailto:info@mutabaacentre.com" style={{ margin: "15px" }}>
          info@mutabaacentre.com
        </a>
        <i className="fas fa-envelope" style={{ margin: "5px" }}></i>
        الشارقة، أبو شغارة، شارع الملك فيصل{" "}
        <i className="fas fa-map-marker-alt"></i>
      </div>
      <div className="social-icons">
        <a href="https://x.com/mutabaacentre">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com/MutabaaCentre/">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/mutabaacentre/">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}

export default TopBar;
