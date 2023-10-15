import React from "react";
import { BsSearch } from "react-icons/bs";
import "./products.css";

export default function Products() {
  return (
    <div className="product-container">
      <div className="product-search">
        <div className="title">
          <h3>Product Sell</h3>
        </div>
        <div className="search">
          <form>
            <button>
              <BsSearch />
            </button>
            <input type="text" placeholder="Search..." name="search" />
          </form>
          <select>
            <option>Last 30 days</option>
          </select>
        </div>
      </div>
      <div className="product-list">
        <div className="product-name">
          <p>Product Name</p>
        </div>
        <div className="product-details">
          <span>Stock</span>
          <span>Price</span>
          <span>Total Sales</span>
        </div>
      </div>
      <hr />
      <div className="product-list">
        <div className="product-name">
          <img src="image_2.jpeg" alt="" />
          <div className="product-description">
            <h3>Abstract 3D</h3>
            <span>Lorem ipsum dolor sit amet consectetur,</span>
          </div>
        </div>
        <div className="product-details">
          <p>32 in stock</p>
          <p>$ 45.99</p>
          <p>20</p>
        </div>
      </div>
    </div>
  );
}
