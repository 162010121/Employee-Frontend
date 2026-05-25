import React from "react";
import "./styles.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <form className="terms-form">
        <h2>Terms & Conditions</h2>

        <p>
          By accessing or using this application, you agree to be bound by these
          Terms and Conditions. If you do not agree, please do not use our
          services.
        </p>

        <ul>
          <li>Use the service only for lawful purposes.</li>
          <li>All content and materials are the property of the company.</li>
          <li>You are responsible for maintaining account confidentiality.</li>
          <li>
            We are not liable for any damages arising from the use of this service.
          </li>
          <li>
            Terms may be updated at any time. Continued use means acceptance.
          </li>
        </ul>

        <p>
          <strong>Governing Law:</strong> These terms are governed by applicable
          local laws.
        </p>

        <div style={{ marginTop: "15px" }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => window.history.back()}
          >
            CANCEL
          </button>

          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={() => window.history.back()}
          >
            ACCEPT
          </button>
        </div>
      </form>
    </div>
  );
};

export default TermsAndConditions;
