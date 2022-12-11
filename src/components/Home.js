import React from "react";
import { useGlobalContext } from "./context/context";
import Filter from "./Filter";
import Product from "./Product";

const Home = () => {
  const {
    state: { products }, productState: { byStock , byFastDelivery,byRatings, sort, searchQuery }} = useGlobalContext();
  // console.log(products);

  const transformProdcuts = () => {
    let sortedProducts = products;
    if (sort){
      sortedProducts = sortedProducts.sort((a,b) => {
        return (
          sort === "lowToHigh" ? a.price -b.price : b.price - a.price
        );
      }) 
    }


    if (!byStock){
      sortedProducts = sortedProducts.filter((elem) => elem.inStock);
    }


    if (byFastDelivery){
      sortedProducts = sortedProducts.filter((elem) => elem.fastDelivery);
    }


    if (byRatings){

      sortedProducts = sortedProducts.filter((elem) => elem.ratings >= byRatings);

    }

    if (searchQuery){

      sortedProducts = sortedProducts.filter((elem) => 
        elem.name.toLowerCase().includes(searchQuery)
      )
    }

    return sortedProducts;

  }


  return (
    <div className="home">
      <Filter />
      <div className="producrtContainer w-75">
        <div className="container">

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {transformProdcuts().map((elem) => {
            return <Product elem={elem} key={elem.id} />;
          })}
        </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
