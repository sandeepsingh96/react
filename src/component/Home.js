import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="./assets/bg.jpg"
          className="card-img"
          alt="..."
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-start ">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 text-danger">
              Welcome
            </h5>
            <p className="card-text lead fs-2 text-danger">
              Check out all trending products
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
