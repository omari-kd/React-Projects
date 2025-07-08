import React from "react";
import { Button } from "../Button/Button";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="hero-container">
      {/* <img src="/public/images/farmland.jpg" alt="farmland" /> */}
      <h1>Big Farms</h1>
      <p>A new way of farming</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}
