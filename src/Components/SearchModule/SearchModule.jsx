import "./searchmodule.css";
import React, { useState } from "react";
import SearchResult from "../SearchResult/SearchResult";

function SearchModule({ cars }) {
  const [model, setModel] = useState([]);

  const sortByModel = (val) => {
    const sortedArr = [];
    cars.map((car) => {
      if (car.model == val) {
        sortedArr.push(car);
      }
    });
    console.log(sortedArr);
    setModel(sortedArr);
  };

  console.log(model);

  return (
    <div className="SearchModule">
      <div className="container">
        <h1>Search By Model</h1>
        <div className="sort-btns">
          <button onClick={() => sortByModel("Forester")} className="sort-btn">Forester</button>
          <button onClick={() => sortByModel("Outback")} className="sort-btn">Outback</button>
          <button onClick={() => sortByModel("Crosstrek")} className="sort-btn">Crosstrek</button>
          <button onClick={() => sortByModel("Impreza")} className="sort-btn">Impreza</button>
          </div>
          <div className="model-flex">
              {model.length > 0 ? 
            model.map((item) => {
            return <SearchResult result={item} />;
          }) : <p className="listing-pretext">Use the buttons above to search active listings</p>} 
        </div>
      </div>
    </div>
  );
}

export default SearchModule;
