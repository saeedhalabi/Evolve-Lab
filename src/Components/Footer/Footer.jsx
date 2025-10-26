import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="footer text-center bg-dark text-white py-4 mt-auto"
      id="collaborate"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 mb-4">
            <h5 className="text-uppercase mb-4 footer-title">Evolve Lab</h5>
            <p className="footer-text">
              Evolve Lab is committed to enhancing work environments by
              providing a platform where employees can share and discuss
              suggestions for improvement. Join us in creating a better
              workplace for everyone.
            </p>
          </div>
        </div>
      </div>
      <div
        className="text-center py-3 footer-date"
        style={{ backgroundColor: "#23272b" }}
      >
        &copy; {currentYear} InnovateHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
