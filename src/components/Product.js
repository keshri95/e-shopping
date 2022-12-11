import React from "react";
import { useGlobalContext } from "./context/context";
import Rating from "./Rating";

const Product = ({ elem }) => {
  const {
    state: { cart },dispatch} = useGlobalContext();

  // console.log(cart);

  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img src={elem.image} className="card-img-top" alt={elem.name} />
          <div className="card-body">
            <h5 className="card-title">{elem.name}</h5>
            <p className="card-text">{elem.price}</p>
            {elem.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 Days Delivery </div>
            )}
            <Rating rating={elem.ratings} />
            <div className="d-flex justify-content-between py-2">
            {cart.some((p) => p.id === elem.id) ? (
              <button
                className="btn btn-danger"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: elem,
                  })
                }
              >
                Remove Cart
              </button>
            ) : (
              <button
                className="btn btn-success"
                onClick={() => 
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: elem,
                  })
                } disabled={!elem.inStock}
              >
                {!elem.inStock ? "Out of Stock" : "Add to Cart"}
              </button>
            )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
