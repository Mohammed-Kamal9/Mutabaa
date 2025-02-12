import React from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer() {
  return (
    <div className="footer">
      <div>
        <h2>تواصلوا معنا</h2>
        <p>دولة الإمارات العربية المتحدة - الشارقة - أبو شغارة مقابل تسهيل</p>
        <p>P.O Box: 69378</p>
        <p>
          <a href="mailto:info@mutabaacentre.com">
            info@mutabaacentre.com
            <i className="fas fa-envelope" style={{ margin: "5px" }}></i>
          </a>
        </p>
        <p>
          8476 787 50 971+
          <i className="fas fa-phone" style={{ margin: "5px" }}></i>
        </p>
      </div>
      <div>
        <p>
          في مركز متابعة لخدمات رجال الأعمال، نسير بخطوات ثابتة محمومة بخبرات
          متراكمة نحو آفاق جديدة لدعم المجتمع والأفراد بخدمات مميزة
        </p>
        <div className="social-icons">
          <a
            href="https://x.com/mutabaacentre"
            target="_blank"
            style={{ margin: "20px" }}
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.facebook.com/MutabaaCentre/"
            target="_blank"
            style={{ margin: "20px" }}
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/mutabaacentre/"
            target="_blank"
            style={{ margin: "20px" }}
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
