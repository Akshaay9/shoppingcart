import React,{useState} from 'react'
import "./app.scss"
import Cart from './Cart'
import ProductList from './ProductList'
import { data } from "./data";
function App() {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [productData, setProductData] = useState(data);

  return (
    <>
    <div className="cartBtn">
      <button className="cart" onClick={()=>setShowCart(!showCart)}>Cart</button>
      </div>
      <Cart 
        showCart={showCart}
        setShowCart={setShowCart}
        cartItems={cartItems}
        setCartItems={setCartItems}
        productData={productData}
        setProductData={setProductData}
      />
      <ProductList
        setCartItems={setCartItems}
        cartItems={cartItems}
        productData={productData}
        setProductData={setProductData}
      />
      </>
  )
}

export default App
