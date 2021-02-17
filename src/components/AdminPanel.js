import React, { useState, useEffect } from "react";

function AdminPanel() {
  const [productDetails, setProductDetails] = useState({
    name: "",
    brand: "",
    Price: "",
    color: "",
    ram: "",
    rom: "",
  });
  const [productData, setProductData] = useState([]);
  const productSubmitHandle = () => {
    const { name, brand, price, color, ram, rom } = productDetails;
    const newProduct = {
      id: Math.random(),
      name,
      brand,
      price,
      color,
      ram,
      rom,
    };

    setProductData([newProduct, ...productData]);
  };
    useEffect(() => {
localStorage.setItem("product",JSON.stringify(productData))
  }, [productData]);
  return (
    <div>
      <div className="welcome">
        <h4>Welcome Admin</h4>
      </div>
      <div className="card">
        <h5>Add Mobile Details</h5>

        <label>1) Enter Mobile Name : </label>
        <input
          type="text"
          value={productDetails.name}
          onChange={(e) =>
            setProductDetails({ ...productDetails, name: e.target.value })
          }
        />
        <label>2) Enter Mobile Brand : </label>
        <input
          type="text"
          value={productDetails.brand}
          onChange={(e) =>
            setProductDetails({ ...productDetails, brand: e.target.value })
          }
        />
        <label>3) Enter Mobile Price : </label>
        <input
          type="number"
          value={productDetails.price}
          onChange={(e) =>
            setProductDetails({ ...productDetails, price: e.target.value })
          }
        />
        <label>4) Enter Mobile Color : </label>
        <input
          type="text"
          value={productDetails.color}
          onChange={(e) =>
            setProductDetails({ ...productDetails, color: e.target.value })
          }
        />
        <label>5) Enter Mobile Ram : </label>
        <input
          type="number"
          value={productDetails.ram}
          onChange={(e) =>
            setProductDetails({ ...productDetails, ram: e.target.value })
          }
        />
        <label>6) Enter Mobile Rom : </label>
        <input
          type="number"
          value={productDetails.rom}
          onChange={(e) =>
            setProductDetails({ ...productDetails, rom: e.target.value })
          }
        />
        <button
          disabled={
            productDetails.name == "" ||
            productDetails.brand == "" ||
            productDetails.price == "" ||
            productDetails.color == "" ||
            productDetails.ram == "" ||
            productDetails.rom == ""
          }
          className="btn"
          onClick={() => productSubmitHandle()}
        >
                  Submit
        </button>
        <div class="input-field col s12">
        <select>
          <option value="" >
            Choose your option
          </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <label>Materialize Select</label>
      </div>
      </div>
    </div>
  );
}

export default AdminPanel;
