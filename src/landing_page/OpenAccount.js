import React from "react";

function OpenAccount() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center text-center">

        <div className="col-md-8">

          <img
            src="media/images/homeHero.png"
            alt="Hero Image"
            className="img-fluid mb-4"
            style={{ maxWidth: "70%" }}
          />

          <h1 className="fw-bold mt-3">Open an account</h1>

          <p className="fs-5 text-muted mt-2">
            Online platform to invest in stocks, ETFs, mutual funds, bonds, and more.
          </p>

          <div className="mt-4">
            <button className="btn btn-primary btn-lg px-5">
              Sign up now
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default OpenAccount;
