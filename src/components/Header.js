import React from "react";
import { Link } from "react-router-dom";
// import Cart from "./Cart";
import { useGlobalContext } from "./context/context";

const Header = () => {
  const { state: { cart }, dispatch, productDispatch } = useGlobalContext();

  // console.log(cart);


  // const {productState: { byStock,byFastDelivery,byRatings, sort, searchQuery} , productDispatch } = useGlobalContext(); 


  // console.log({byStock,byFastDelivery,byRatings, sort, searchQuery, sort});
  
  return (
    <>
      <div className="py-3 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Link className="navbar-brand" to="/">
                <p className="fs-4">E-Shop</p>
              </Link>
            </div>

            <div className="col-sm-6">
              <form>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search products..."
                  aria-label="State"

                  onChange={(e) => {
                    productDispatch({
                      type: "SORT_BY_SEARCH",
                      payload: e.target.value,
                    })
                  }}
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
                  <span>{cart.length}</span>
                </button>
                <ul className="dropdown-menu" style={{ width: "350px" }}>
                  {cart.length === 0 ? (
                    <li>
                      <Link className="dropdown-item">Cart is empty!</Link>
                    </li>
                  ) : (
                    <div>
                      {cart.map((item, ind) => {
                        return (
                          <div className="row m-1" key={ind}>
                            <div className="col-4">
                              <div className="card">
                                <img
                                  src={item.image}
                                  className="rounded-circle"
                                  alt={item.name}
                                />
                              </div>
                            </div>
                            <div className="col-8 ">
                              <div className="d-flex justify-content-evenly">
                                <div className="card-body">
                                  <p>{item.name}</p>
                                  <p>{item.price}</p>
                                </div>
                                <button
                                  className="btn btn-danger"
                                  onClick={() => {
                                    dispatch({
                                      type: "DELETE_CART",
                                      payload: item,
                                    });
                                  }}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <div className="d-grid m-1">
                        <Link to="cart" className="btn btn-primary">
                          Go To Cart
                        </Link>
                      </div>
                    </div>
                  )}
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
