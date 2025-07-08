import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Cards from "../components/Card/Cards";
import "../App.css";
import Footer from "../components/Footer/Footer";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}
