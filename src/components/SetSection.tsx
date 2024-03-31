import React from "react";
import "../styles/SetSection.scss";

interface Set {
  id: number;
  name: string;
  image: string;
  ingredients: string;
  price: number;
}

const SetSection: React.FC = () => {
  const set: Set[] = [
    {
      id: 1,
      name: "Сет №1",
      image: "img/сет1.jpg",
      ingredients:
        "ролл Филадельфия в кунжуте, ролл Сливочная Калифорния, 2 гункана Острая Креветка, 2 гункана Острый краб.",
      price: 1399,
    },
    {
      id: 2,
      name: "Сет №2",
      image: "img/сетфила.jpg",
      ingredients:
        "ролл Филадельфия, ролл Филадельфия с угрём, 2 суши с креветкой, 2 суши с лососем, 2 суши с угрём.",
      price: 1799,
    },
    {
      id: 3,
      name: "Сет №3",
      image: "img/сетпеч.jpg",
      ingredients:
        "ролл Запечённый Лосось, ролл Запечённый Краб, 2 суши Запечённый Лосось, 2 суши Запечённый Краб. Подаётся горячим",
      price: 1999,
    },
    {
      id: 4,
      name: "Сет №4",
      image: "img/сетспайси.jpg",
      ingredients:
        "3 гункана Острый Лосось, 3 гункана Острые Мидии, 3 гункана Острый Краб, 3 гункана Острый Угорь, 3 гункана Острая Креветка.",
      price: 2399,
    },
  ];

  return (
    <div className="set-section">
      <h2 className="section-title">Сеты</h2>
      <div className="set-category">
        {set.map((set) => (
          <div key={set.id} className="set-item">
            <img src={set.image} alt={set.name} className="set-image" />
            <div className="set-details">
              <h3 className="set-name">{set.name}</h3>
              <p className="set-ingredients">{set.ingredients}</p>
              <p className="set-price">{set.price} руб.</p>
              <button className="add-to-cart">Добавить в корзину</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SetSection;
