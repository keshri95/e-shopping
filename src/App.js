import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext, useGlobalContext } from "./components/context/context";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  // const data  = useGlobalContext();
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Cart />} />
      </Routes>
    
    </>
  );
}

export default App;
