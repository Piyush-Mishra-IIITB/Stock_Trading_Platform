import React from "react";

function Awards() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        {/* Left Image */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
          />
        </div>

        {/* Right Content */}
        <div className="col-md-6">

          <h1 className="fw-bold mb-3">
            Largest stock broker in India
          </h1>

          <p className="text-muted mb-4">
            We are proud to be India's largest stock broker with over 6 million
            clients. Our commitment to providing exceptional services and
            innovative solutions has helped us achieve this milestone.
          </p>

          {/* Lists */}
          <div className="row mb-4">

            <div className="col-6">
              <ul className="ps-3">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul className="ps-3">
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Government securities</li>
              </ul>
            </div>

          </div>

          {/* Press Logos */}
          <img
            src="media/images/pressLogos.png"
            alt="Press Logos"
            className="img-fluid mt-2"
          />

        </div>
      </div>
    </div>
  );
}

export default Awards;
