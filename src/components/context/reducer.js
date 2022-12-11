import React from "react";

export const reducer = (state, action) => {
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
};


export const productReducer = (state, action) => {

  switch(action.type){

    case "SORT_BY_PRICE":
      return{
        ...state,
        sort: action.payload,
      }

      case "SORT_BY_RATINGS":
        return {
          ...state,
          byRatings: action.payload,
        }

      case "SORT_BY_STOCK":
        return {
          ...state,
          byStock: !state.byStock,
        }


      case "SORT_BY_DELIVERY":
        return{
          ...state,
          byFastDelivery: !state.byFastDelivery,
        }


      case "SORT_BY_SEARCH":
          return{
            ...state,
            searchQuery: action.payload,
          }

      case "CLEAR_FILTER":
        return{
          byStock: false,
          byFastDelivery: false,
          byRatings: 0,
          searchQuery: "",
        }


      

    default: 
      return state;
  }

}
