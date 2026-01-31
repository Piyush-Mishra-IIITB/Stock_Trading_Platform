import React from "react";

function Stats() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        {/* Left Content */}
        <div className="col-md-6 p-4">

          <h1 className="fs-2 mb-4">Trust with confidence</h1>

          <h2 className="fs-5">Customer-first always</h2>
          <p className="text-muted mb-4">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>

          <h2 className="fs-5">No spam or gimmicks</h2>
          <p className="text-muted mb-4">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-5">The Zerodha universe</h2>
          <p className="text-muted mb-4">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-5">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>

        </div>

        {/* Right Image */}
        <div className="col-md-6 p-4 text-center">

          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid mb-4"
            style={{ maxWidth: "90%" }}
          />

          <div>

            <a
              href="#"
              className="mx-4"
              style={{ textDecoration: "none" }}
            >
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

            <a
              href="#"
              style={{ textDecoration: "none" }}
            >
              Try Kite demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Stats;
