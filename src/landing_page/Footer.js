import React from "react";

function Footer() {
  return (
    <footer
      className="pb-5"
      style={{ backgroundColor: "rgb(250, 250, 250)" }}
    >
      <div className="container border-top mt-5 pt-5">

        {/* Top Section */}
        <div className="row">

          {/* Logo */}
          <div className="col-md-3 mb-4">
            <img
              src="media/images/logo.svg"
              alt="Zerodha Logo"
              style={{ width: "60%" }}
              className="mb-3"
            />
            <p className="text-muted small">
              © 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none">About</a></li>
              <li><a href="#" className="text-decoration-none">Products</a></li>
              <li><a href="#" className="text-decoration-none">Pricing</a></li>
              <li><a href="#" className="text-decoration-none">Referral programme</a></li>
              <li><a href="#" className="text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-decoration-none">Zerodha.tech</a></li>
              <li><a href="#" className="text-decoration-none">Press & media</a></li>
              <li><a href="#" className="text-decoration-none">Zerodha cares (CSR)</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-decoration-none">Support portal</a></li>
              <li><a href="#" className="text-decoration-none">Z-Connect blog</a></li>
              <li><a href="#" className="text-decoration-none">List of charges</a></li>
              <li><a href="#" className="text-decoration-none">Downloads & resources</a></li>
            </ul>
          </div>

          {/* Account */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3">Account</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none">Open an account</a></li>
              <li><a href="#" className="text-decoration-none">Fund transfer</a></li>
              <li><a href="#" className="text-decoration-none">60 day challenge</a></li>
            </ul>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633. CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015.
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day.
          </p>
        </div>

        {/* Bottom Links */}
        <div className="mt-4 pt-3 pb-3 border-bottom"> 
          <div className="d-flex flex-wrap justify-content-center gap-3 small text-muted text-center">
            <a href="#" className="text-decoration-none">NSE</a>
            <a href="#" className="text-decoration-none">BSE</a>
            <a href="#" className="text-decoration-none">MCX</a>
            <a href="#" className="text-decoration-none">Terms & conditions</a>
            <a href="#" className="text-decoration-none">Policies & procedures</a>
            <a href="#" className="text-decoration-none">Privacy policy</a>
            <a href="#" className="text-decoration-none">Disclosure</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
