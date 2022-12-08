import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useGlobalContext } from "./context/context";
import Rating from "./Rating";
const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useGlobalContext();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  console.log(cart);
  return (
    <>
      <div className="container">
        <div className="cartContainer">
          <div className="w-75">
            <div className="row w-100 shadow rounded">
              {cart.map((item, ind) => {
                const { name, price, image, ratings } = item;

                return (
                  <div className="card" key={ind}>
                    <div className="row g-0 align-items-center">
                      <div className="col-md-2">
                        <img
                          src={image}
                          className="img-fluid rounded-start"
                          alt={name}
                        />
                      </div>
                      <div className="col-md-2">
                        <div className="card-body">
                          <h5 className="card-title">{name}</h5>
                        </div>
                      </div>

                      <div className="col-md-2">
                        <div className="card-body">
                          <p className="card-text">{price}</p>
                        </div>
                      </div>

                      <div className="col-md-2">
                        <div className="card-body">
                          <Rating rating={ratings} />
                        </div>
                      </div>

                      <div className="col-md-2 mx-2">
                        <select
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                          value={item.qty}
                          onChange={(e) => {
                            dispatch({
                              type: "CHANGE_LIST",
                              payload: {
                                id: item.id,
                                qty: e.target.value,
                              },
                            });
                          }}
                        >
                          {[...Array(item.inStock).keys()].map((x) => {
                            return <option key={x + 1}>{x + 1}</option>;
                          })}
                        </select>
                      </div>

                      <div className="col">
                        <button
                          className="btn btn-danger"
                          onClick={() =>
                            dispatch({
                              type: "DELETE_CART",
                              payload: item,
                            })
                          }
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="checkoutContainer shadow bg-body rounded">
            <div className="d-flex flex-column justify-content-start p-4">
              <p className="fs-1">Subtotal items {cart.length}</p>
              <p className="display-6">Total: {total} </p>
              <button className="btn btn-primary">Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
