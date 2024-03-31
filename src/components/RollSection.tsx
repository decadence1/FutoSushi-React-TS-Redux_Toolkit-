import React from "react";
import "../styles/RollSection.scss";

interface Roll {
  id: number;
  name: string;
  image: string;
  ingredients: string;
  price: number;
}

const RollSection: React.FC = () => {
  const rolls: Roll[] = [
    {
      id: 1,
      name: "Филадельфия",
      image: "img/филадельфия.jpg",
      ingredients: "рис, нори, сливочный сыр, огурец, лосось охлажденный.",
      price: 540,
    },
    {
      id: 2,
      name: "Калифорния",
      image: "img/калифорния.jpg",
      ingredients:
        "рис, нори, огурец, авокадо, лосось охлажденный, майонез, икра «масаго».",
      price: 540,
    },
    {
      id: 3,
      name: "Токио",
      image: "img/Токио.jpg",
      ingredients:
        "рис, нори, лосось копченый, соус «спайси», кунжут, лук зелёный, огурец.",
      price: 590,
    },
    {
      id: 4,
      name: "Филадельфия с угрем",
      image: "img/филадельфияугорь.jpg",
      ingredients:
        "рис, нори, сливочный сыр, огурец, угорь, соус «унаги», кунжут.",
      price: 620,
    },
    {
      id: 5,
      name: "Филадельфия с креветкой",
      image: "img/филадельфиякреветка.jpg",
      ingredients: "рис, нори, сливочный сыр, огурец, креветка, кунжут.",
      price: 540,
    },
    {
      id: 6,
      name: "Orange roll",
      image: "img/orange.jpg",
      ingredients:
        "лосось, краб, сливочный сыр, нори, рис, огурец, икра «масаго».",
      price: 550,
    },
    {
      id: 7,
      name: "Сахалин",
      image: "img/сахалин.jpg",
      ingredients: "лосось, снежный краб, сливочный сыр, огурец, спайси соус.",
      price: 599,
    },
    {
      id: 8,
      name: "Red roll",
      image: "img/red.jpg",
      ingredients:
        "тигровая креветка, лосось, рис, нори, сливочный сыр, огурец, икра «масаго».",
      price: 550,
    },
  ];

  return (
    <div id="rolls" className="roll-section">
      {" "}
      <h2 className="section-title">Роллы</h2>
      <div className="roll-category">
        {rolls.map((roll) => (
          <div key={roll.id} className="roll-item">
            <img src={roll.image} alt={roll.name} className="roll-image" />
            <div className="roll-details">
              <h3 className="roll-name">{roll.name}</h3>
              <p className="roll-ingredients">{roll.ingredients}</p>
              <p className="roll-price">{roll.price} руб.</p>
              <button className="add-to-cart">Добавить в корзину</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RollSection;
