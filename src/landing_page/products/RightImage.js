import React from "react";

function RightImage({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container my-5">

      <div className="row align-items-center">

        {/* Left Content */}
        <div className="col-md-6 p-4">

          <h2 className="mb-3">{productName}</h2>

          <p className="text-muted">
            {productDescription}
          </p>

          <a href={learnMore} className="text-decoration-none">
            Learn More {" "} <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

        </div>

        {/* Right Image */}
        <div className="col-md-6 text-center">

          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />

        </div>

      </div>

    </div>
  );
}

export default RightImage;
