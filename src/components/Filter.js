import React, { useState } from "react";
import Rating from "./Rating";

const Filter = () => {
  const [rate, setRate] = useState();
  return (
    <div className="bg-light w-25">
       
      <div className="ps-5">
        <div>
          <p className="fs-2">Filter Products</p>
          <div className="form-check py-2">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Ascending
            </label>
          </div>
          <div className="form-check py-2">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Descending
            </label>
          </div>
          <div className="form-check py-2">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Include Out of Stock
            </label>
          </div>
          <div className="form-check py-2">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Fast Delivery Only
            </label>
          </div>

          <div className="d-flex py-2">
            <label className="form-check-label" htmlFor="flexCheckDefault">Ratings:</label>
            <Rating rating={rate} style={{cursor: "pointer"}} onClick={(i) => setRate(i +1)} />
          </div>

          <div className="d-grid me-3 py-2">
            <button className="btn btn-primary" type="button">
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
