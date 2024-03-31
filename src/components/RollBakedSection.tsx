import React from "react";
import "../styles/RollBakedSection.scss";

interface Baked {
  id: number;
  name: string;
  image: string;
  ingredients: string;
  price: number;
}

const BakedSection: React.FC = () => {
  const baked: Baked[] = [
    {
      id: 1,
      name: "Запеченный ролл с лососем",
      image: "img/лососьпеч.jpg",
      ingredients:
        "рис, лосось, огурец, сливочный сыр, Яки соус, кунжут, Унаги соус.",
      price: 589,
    },
    {
      id: 2,
      name: "Запеченный ролл с крабом",
      image: "img/крабпеч.jpg",
      ingredients:
        "рис, краб, огурец, сливочный сыр, Яки соус, кунжут, Унаги соус.",
      price: 459,
    },
    {
      id: 3,
      name: "Запеченный ролл с мидией",
      image: "img/мидиипеч.jpg",
      ingredients:
        "рис, мидии, огурец, сливочный сыр, Яки соус, кунжут, Унаги соус.",
      price: 459,
    },
    {
      id: 4,
      name: "Запеченный ролл с угрём",
      image: "img/угорьпеч.jpg",
      ingredients:
        "рис, угорь, огурец, сливочный сыр, Яки соус, кунжут, Унаги соус..",
      price: 599,
    },
    {
      id: 5,
      name: "Ролл-темпура с крабом",
      image: "img/крабтемп.jpg",
      ingredients:
        "краб, сливочный сыр, огурец, икра масаго, спайси соус, сухари панко, соус унаги, кунжут, рис.",
      price: 450,
    },
    {
      id: 6,
      name: "Ролл-темпура с креветкой",
      image: "img/креветкатемп.jpg",
      ingredients:
        "креветка, сливочный сыр, огурец, икра масаго, спайси соус, сухари панко, соус унаги, кунжут, рис.",
      price: 599,
    },
    {
      id: 7,
      name: "Ролл-темпура с лососем",
      image: "img/лососьтемп.jpg",
      ingredients:
        "лосось, сливочный сыр, огурец, икра масаго, спайси соус, сухари панко, соус унаги, кунжут, рис..",
      price: 549,
    },
    {
      id: 8,
      name: "Ролл Гурман",
      image: "img/гурман.jpg",
      ingredients:
        "лосось, сливочный сыр, огурец, икра масаго, спайси соус, сухари панко, соус унаги, кунжут, рис.",
      price: 539,
    },
  ];

  return (
    <div className="baked-section">
      <h2 className="section-title">Запеченные роллы</h2>
      <div className="baked-category">
        {baked.map((baked) => (
          <div key={baked.id} className="baked-item">
            <img src={baked.image} alt={baked.name} className="baked-image" />
            <div className="baked-details">
              <h3 className="baked-name">{baked.name}</h3>
              <p className="baked-ingredients">{baked.ingredients}</p>
              <p className="baked-price">{baked.price} руб.</p>
              <button className="add-to-cart">Добавить в корзину</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BakedSection;
