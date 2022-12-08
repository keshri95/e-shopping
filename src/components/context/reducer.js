import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };

    case "DELETE_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case "CHANGE_LIST":
      return {
        ...state,
        cart: state.cart.filter((select) =>
          select.id === action.payload.id ? (select.qty = action.payload.qty): select.qty
        ),
      };

    default:
      return state;
  }

  return <div>reducer</div>;
};

export default reducer;
