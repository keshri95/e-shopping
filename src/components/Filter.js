import React from "react";
import { useGlobalContext } from "./context/context";
import Rating from "./Rating";

const Filter = () => {
  // const [rate, setRate] = useState();

  // filter states----
  const { productState: { byStock,byFastDelivery,byRatings, sort } , productDispatch } = useGlobalContext(); 
  

  // console.log({ byStock,byFastDelivery,byRatings, sort});

  return (
    <div className="bg-light">
       
      <div className="ps-5">
        {/* <div> */}
          <p className="fs-5 filterText__heading">Filter Products</p>
          <div className="form-check py-2">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onChange={() => {
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "lowToHigh"
                })
              }
            }
            checked={sort === "lowTohigh" ? true : false}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Ascending
            </label>
          </div>
          <div className="form-check py-2">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              onChange={() => {
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "highToLow",
                })
              }}
              checked={sort === "highToLow" ? true : false}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Descending
            </label>
          </div>
          <div className="form-check py-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={() => {
                productDispatch({
                  type: "SORT_BY_STOCK",
                })
              }}
              checked={byStock}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Include Out of Stock
            </label>
          </div>
          <div className="form-check py-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              onChange={() => {
                productDispatch({
                  type:"SORT_BY_DELIVERY",
                })
              }}
              checked={byFastDelivery}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Fast Delivery Only
            </label>
          </div>

          <div className="d-flex py-2">
            <label className="form-check-label" htmlFor="flexCheckDefault">Ratings:</label>
            <Rating rating={byRatings} style={{cursor: "pointer"}} onClick={(i) => 
              productDispatch({
                type: "SORT_BY_RATINGS",
                payload: i +1,
            })} 
            
            />
          </div>

          <div className="d-grid me-3 py-2">
            <button className="btn btn-primary" type="button" onClick={() => {
              productDispatch({
                type: "CLEAR_FILTER",
              })
            }}>
              Clear Filter
            </button>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Filter;
