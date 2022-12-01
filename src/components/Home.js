import React from "react";
import { useGlobalContext } from "./context/context";
import Filter from "./Filter";
import Product from "./Product";

const Home = () => {
  const {
    state: { products },
  } = useGlobalContext();
  console.log(products);
  return (
    <div className="home">
      <Filter />
      <div className="producrtContainer w-75">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((elem) => {
            return <Product elem={elem} key={elem.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
