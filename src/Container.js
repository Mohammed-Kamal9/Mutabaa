import React from "react";
import "./App.css"; // تأكد من وجود ملف CSS لهذا المكون

function Container() {
  return (
    <div>
      {/* قسم العنوان والاتصال */}
      <div className="container">
        <h1>شارع الملك فيصل</h1>
        <p>
          <strong>الشارقة, أبو شغارة</strong>
        </p>
        <p>
          <strong>الهاتف : </strong>8476 787 50 971+
        </p>
        <p>
          <strong>البريد الإلكتروني : </strong> info@mutabaacentre.com
        </p>
      </div>

      {/* قسم أوقات الدوام */}
      <div className="container">
        <h1>أوقات الدوام</h1>
        <div className="day">السبت:</div>
        <p className="time">
          08:00 ص - 2:00 م{" "}
          <span style={{ display: "block" }}>05:00 م - 9:00 م </span>
        </p>
        <div className="day">الأحد:</div>
        <p className="time closed">مغلق</p>
        <div className="day">الإثنين:</div>
        <p className="time">
          08:00 ص - 2:00 م{" "}
          <span style={{ display: "block" }}>05:00 م - 9:00 م </span>
        </p>
        <div className="day">الثلاثاء:</div>
        <p className="time">
          08:00 ص - 2:00 م{" "}
          <span style={{ display: "block" }}>05:00 م - 9:00 م </span>
        </p>
        <div className="day">الأربعاء:</div>
        <p className="time">
          08:00 ص - 2:00 م{" "}
          <span style={{ display: "block" }}>05:00 م - 9:00 م </span>
        </p>
        <div className="day">الخميس:</div>
        <p className="time">
          08:00 ص - 2:00 م{" "}
          <span style={{ display: "block" }}>05:00 م - 9:00 م </span>
        </p>
        <div className="day">الجمعة:</div>
        <p className="time">
          08:00 ص - 2:00 م{" "}
          <span style={{ display: "block" }}>05:00 م - 9:00 م </span>
        </p>
      </div>

      {/* قسم حجز الموعد */}
      <div className="container">
        <h1>قم بحجز موعدك</h1>
        <form id="appointmentForm">
          <label htmlFor="fullName">الاسم</label>
          <input type="text" id="fullName" className="booking-input" required />

          <label htmlFor="emailAddress">البريد الإلكتروني</label>
          <input
            type="email"
            id="emailAddress"
            className="booking-input"
            required
          />

          <label htmlFor="phoneNumber">رقم الهاتف</label>
          <div className="phone-container">
            <span style={{ height: "100%" }}>971+</span>
            <input
              type="tel"
              id="phoneNumber"
              className="booking-input"
              placeholder="50 899 5321"
              required
              style={{ padding: "12px" }}
            />
          </div>

          <label htmlFor="serviceType">الخدمة المطلوبة</label>
          <select
            id="serviceType"
            className="booking-select"
            required
            style={{ width: "100%" }}
          >
            <option value="">اختر الخدمة</option>
            <option value="إعداد تقارير التدقيق المالي">
              إعداد تقارير التدقيق المالي
            </option>
            <option value="خدمات العمالة المنزلية (تدبير)">
              خدمات العمالة المنزلية (تدبير)
            </option>
            <option value="وزارة الموارد البشرية والتوطين (تسهيل)">
              وزارة الموارد البشرية والتوطين (تسهيل)
            </option>
            <option value="خدمات دائرة التنمية الاقتصادية">
              خدمات دائرة التنمية الاقتصادية
            </option>
            <option value="الإشراف و المتابعة">الإشراف و المتابعة</option>
            <option value="استشارة أعمال">استشارة أعمال</option>
            <option value="خدمات التراخيص">خدمات التراخيص</option>
            <option value="خدمات آمر">خدمات آمر</option>
            <option value="خدمات الهيئة الاتحادية للضرائب">
              خدمات الهيئة الاتحادية للضرائب
            </option>
            <option value="دراسة جدوى">دراسة جدوى</option>
            <option value="الإستشارات المالية">الإستشارات المالية</option>
            <option value="خدمات تأشيرة شنغن">خدمات تأشيرة شنغن</option>
            <option value="تسويق رقمي">تسويق رقمي</option>
          </select>

          <label htmlFor="appointmentDate">تاريخ الحجز</label>
          <input
            type="date"
            id="appointmentDate"
            className="booking-input"
            required
          />

          <label htmlFor="appointmentTime">وقت الحجز</label>
          <input
            type="time"
            id="appointmentTime"
            className="booking-input"
            required
          />

          <button
            type="submit"
            className="booking-button"
            style={{ width: "100%" }}
          >
            إرسال الحجز
          </button>
        </form>

        <ul id="appointmentsList" className="booking-list"></ul>
      </div>

      {/* قسم CTA */}
      <div className="cta-section">
        <a
          href="https://mutabaacentre.com/contact.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="cta-button">تواصل معنا</button>
        </a>
      </div>
    </div>
  );
}

export default Container;
