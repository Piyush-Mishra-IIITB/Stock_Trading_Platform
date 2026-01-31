import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5 img-fluid"
        />

        <h1 className="mt-4 fw-bold">Invest in every stock</h1>

        <p className="fs-5 text-muted">
          Online platform to invest in stocks, ETFs, mutual funds, bonds, and more.
        </p>

        <div className="mt-4">
          <button className="btn btn-primary btn-lg px-5">
            Sign up now
          </button>
        </div>

      </div>
    </div>
  );
}

export default Hero;
