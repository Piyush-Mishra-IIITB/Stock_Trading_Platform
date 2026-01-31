import React from "react";

function LeftImage({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container my-5">

      <div className="row align-items-center">

        {/* Left Image */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>

        {/* Right Content */}
        <div className="col-md-6 p-4">

          <h1 className="mb-3">{productName}</h1>

          <p className="text-muted">
            {productDescription}
          </p>

          {/* Links */}
          <div className="mt-3">
            <a href={tryDemo} className="text-decoration-none me-5">
              Try Demo {" "} <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

            <a href={learnMore} className="text-decoration-none">
              Learn More {" "} <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          {/* Store Badges */}
          <div className="mt-4">
            <a href={googlePlay} className="me-4">
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
              />
            </a>

            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
              />
            </a>
          </div>

        </div>
      </div>

    </div>
  );
}

export default LeftImage;
