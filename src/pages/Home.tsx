import React from "react";
import ProductCarousel from "../components/ProductCarousel";
// import "../styles/Home.scss";

const Home: React.FC = () => {
  const products = [
    { id: 1, name: "Product 1", image: "img/слайд1.jpg" },
    { id: 2, name: "Product 2", image: "img/слайд2.jpg" },
    { id: 3, name: "Product 3", image: "img/слайд3.jpg" },
    { id: 4, name: "Product 4", image: "img/слайд4.jpg" },
  ];

  return (
    <div className="home">
      <ProductCarousel products={products} />
    </div>
  );
};

export default Home;
