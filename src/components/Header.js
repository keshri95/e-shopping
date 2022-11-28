import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="py-3 bg-light">
        <div className="container">
          <div className="row g-3">
            <div className="col-sm">
              <Link className="navbar-brand" to="/">
                <p className="fs-4">E-Shop</p>
              </Link>
            </div>

            <div className="col-sm-7">
              <form>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search products..."
                  aria-label="State"
                />
              </form>
            </div>

            <div className="col-sm">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-info dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>5</span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Cart is empty!
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
