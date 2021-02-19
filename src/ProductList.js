import React, { useState } from "react";
import { data } from "./data";
function ProductList({ cartItems, setCartItems,productData,setProductData }) {
 
    const [productQty, setProductQty] = useState(1);
    const[modifyCartQty,setModifyCartQty]=useState(1)

  const addToCart = (id) => {
    const findItemInCart = cartItems.find((ele) => ele.id == id);
    if (!findItemInCart) {
      const newCartItem = productData.find((ele) => ele.id == id);
      newCartItem.cartQty = productQty;
      setCartItems([newCartItem, ...cartItems]);

      setProductData((ele) => [
        ...ele.map((obj) =>
          obj.id == id
            ? {
                ...obj,
                qty: obj.qty - productQty,
              }
            : obj
        ),
      ]);
      setCartItems((ele) => [
        ...ele.map((obj) =>
          obj.id == id
            ? {
                ...obj,
                qty: obj.qty - productQty,
              }
            : obj
        ),
      ]);
      setProductQty(1);
    } else {
      setCartItems((ele) => [
        ...ele.map((obj) =>
          obj.id == id
            ? {
                ...obj,
                    cartQty: parseInt(obj.cartQty) + parseInt(productQty),
                    qty: obj.qty - productQty,
              }
            : obj
        ),
      ]);
      setProductData((ele) => [ 
        ...ele.map((obj) =>
          obj.id == id
            ? {
                ...obj,
                qty: obj.qty - productQty,
              }
            : obj
        ),
      ]);
    }

    setProductQty(1);
  };
  return (
    <div>
      <h2 className="homeScreenTitle">Product List</h2>
      <div className="productList">
        {productData.map((ele) => (
          <div key={ele.id} className="card">
            <div className="heading">
              <h3 className="productListName">{ele.name}</h3>
              <div className="productImage">
                <img src={ele.img} alt="" />
              </div>
              <div className="productQty">
                <h4>Price : {ele.price}</h4>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  placeholder="1"
                  onChange={(e) => setProductQty(e.target.value)}
                  min="1"
                  max={ele.qty}
                />
                <button
                  onClick={() => addToCart(ele.id)}
                  disabled={ele.qty == 0}
                >
                  Add To Cart
                </button>
                <p style={ele.qty == 0 ? { color: "red" } : { color: "green" }}>
                  in Stock : {ele.qty}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
