import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

export default function Cards() {
  return (
    <div className="cards">
      <h1>Check Out Our Products</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/image1.webp"
              text="Bring your farm to the next level"
              label="Products"
              path="/products"
            />
            <CardItem
              src="/images/image2.jpg"
              text="We provide farm services"
              label="Products"
              path="/products"
            />
            <CardItem
              src="/images/image3.webp"
              text="Expert farm management"
              label="Products"
              path="/products"
            />
            <CardItem
              src="/images/image4.jpg"
              text="Products for your farm"
              label="Products"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
