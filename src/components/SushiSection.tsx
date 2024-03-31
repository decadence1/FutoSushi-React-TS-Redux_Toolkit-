import React from "react";
import "../styles/SushiSection.scss";

interface Sushi {
  id: number;
  name: string;
  image: string;
  ingredients: string;
  price: number;
}

const SushiSection: React.FC = () => {
  const sushi: Sushi[] = [
    {
      id: 1,
      name: "Маки с лососем",
      image: "img/макилосось.jpg",
      ingredients: "рис, нори, лосось охлажденный.",
      price: 349,
    },
    {
      id: 2,
      name: "Маки с тунцом",
      image: "img/макитунец.jpg",
      ingredients: "рис, нори, тунец охлажденный.",
      price: 345,
    },
    {
      id: 3,
      name: "Маки с угрем",
      image: "img/макиугорь.jpg",
      ingredients: "рис, нори, угорь охлажденный.",
      price: 399,
    },
    {
      id: 4,
      name: "Маки с креветкой",
      image: "img/макикреветка.jpg",
      ingredients: "рис, нори, креветка охлажденная.",
      price: 399,
    },
    {
      id: 5,
      name: "Маки с огурцом",
      image: "img/макиогурец.jpg",
      ingredients: "рис, нори, огурец.",
      price: 160,
    },
    {
      id: 6,
      name: "Маки с авокадо",
      image: "img/макиавокадо.jpg",
      ingredients: "рис, нори, авокадо.",
      price: 199,
    },
    {
      id: 7,
      name: "Маки с дайконом",
      image: "img/макидайкон.jpg",
      ingredients: "рис, нори, дайкон.",
      price: 190,
    },
    {
      id: 8,
      name: "Маки с чуккой",
      image: "img/макичукка.jpg",
      ingredients: "рис, нори, чукка.",
      price: 190,
    },
    // Добавьте другие роллы по аналогии
  ];

  return (
    <div className="sushi-section">
      <h2 className="section-title">Маки</h2>
      <div className="sushi-category">
        {sushi.map((sushi) => (
          <div key={sushi.id} className="sushi-item">
            <img src={sushi.image} alt={sushi.name} className="sushi-image" />
            <div className="sushi-details">
              <h3 className="sushi-name">{sushi.name}</h3>
              <p className="sushi-ingredients">{sushi.ingredients}</p>
              <p className="sushi-price">{sushi.price} руб.</p>
              <button className="add-to-cart">Добавить в корзину</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SushiSection;
