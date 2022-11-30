import React from "react";
import { createContext, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <>
      <AppContext.Provider value={"Ashish"}>{children}</AppContext.Provider>
    </>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
