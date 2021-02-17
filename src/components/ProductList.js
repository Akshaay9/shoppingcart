import { LocalFloristTwoTone } from "@material-ui/icons";
import React, { useState, useEffect } from "react";

function ProductList() {
  const [newProduct, setNewProduct] = useState();
  useEffect(() => {
    setNewProduct(
      localStorage.getItem("product")
        ? JSON.parse(localStorage.getItem("product"))
        : []
    );
  }, []);

  return (
    <div>
      Product Lists
      <div >
        <select>
          <option value="" >
            Choose your option
          </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        
      </div>
      {newProduct && newProduct.map((ele) => <h1>{ele.name}</h1>)}
    </div>
  );
}

export default ProductList;
