import React, { useState,useEffect } from "react";
import { data } from "./data";
function Cart({
  setShowCart,
  showCart,
  cartItems,
  setCartItems,
  productData,
  setProductData,
}) {
  const [cartitemQty, setCartItemQty] = useState(1);
  const [totalQty, setTotalQty] = useState(0);
  const [totalprice, setTotalprice] = useState(0);

  const removeFromCartHandler = (id) => {
    setCartItems((ele) => [...ele.filter((obj) => obj.id !== id)]);
    const newProduct = data.find((ele) => ele.id == id);
    console.log(newProduct);
    setProductData((ele) => [
      ...ele.map((obj) =>
        obj.id == id
          ? {
              ...newProduct,
            }
          : obj
      ),
    ]);
  };

  const changeCartQty = (id) => {
    console.log(cartitemQty);
    const newProduct = data.find((ele) => ele.id == id);
    setCartItems((ele) => [
      ...ele.map((obj) =>
        obj.id == id
          ? {
              ...obj,
              cartQty: cartitemQty,
              qty: newProduct.qty - cartitemQty,
            }
          : obj
      ),
    ]);
    setProductData((ele) => [
        ...ele.map((obj) =>
          obj.id == id
            ? {
                ...obj,
                qty: newProduct.qty - cartitemQty,
              }
            : obj
        ),
    ]);
    setCartItemQty(1)
  };
  const qtySelectHandler = (id) => {
    const newProduct = data.find((ele) => ele.id == id);
    return (
      <input
        type="number"
        id="quantity"
        name="quantity"
        onChange={(e) => setCartItemQty(e.target.value)}
        min="1"
        max={newProduct.qty}
      />
    );
  };
    console.log(cartItems);
    useEffect(() => {
        setTotalprice(cartItems.reduce((acc,obj)=>acc+obj.cartQty*obj.price,0))
        setTotalQty(cartItems.reduce((acc,obj)=>acc+obj.cartQty*1,0))
    },[productData,cartItems])
  return (
    <div className={`cartScreen ${showCart ? `showCart` : `damn`}`}>
      <h1 className="cartScreenTitle">Cart Screen</h1>
      <button className="closeCart" onClick={() => setShowCart(!showCart)}>
        X Close
      </button>
      <div className="cartScrrenDetails">
        <div className="amount">
          <h4>Amount : {totalprice} rs</h4>
        </div>
        <div className="totalQty">
          <h4>qty : {totalQty}</h4>
        </div>
      </div>
      <div className="productList">
        {cartItems.length == 0 ? (
          <h3 style={{ textAlign: "center" }}>No items In the Cart</h3>
        ) : (
          cartItems.map((ele) => (
            <div className="card">
              <div className="heading">
                <h3 className="productListName">{ele.name}</h3>
                <div className="productImage">
                  <img src={ele.img} alt="" />
                </div>
                <div className="productQty">
                  <h4>Price : {ele.price * ele.cartQty}</h4>
                  <h4>Total Qty : {ele.cartQty}</h4>
                          {/*  */}
                         { qtySelectHandler(ele.id)}
                  <button onClick={() => changeCartQty(ele.id)}>
                    Modify Quatity
                  </button>

                  <h5
                    style={ele.qty == 0 ? { color: "red" } : { color: "white" }}
                  >
                    in Stock : {ele.qty}
                  </h5>

                  <button onClick={() => removeFromCartHandler(ele.id)}>
                    Remove From Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
