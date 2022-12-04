import React, { useReducer } from "react";
import { createContext, useContext } from "react";
import { faker } from "@faker-js/faker";
import reducer from "./reducer";
// import { type } from "@testing-library/user-event/dist/type";

const products = [...Array(20)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.product(),
  price: faker.commerce.price(),
  image: faker.image.image(),
  firstName: faker.name.firstName(),
  inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
  fastDelivery: faker.datatype.boolean(),
  ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
}));

const initalState = {
  products: products,
  cart: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <>
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
