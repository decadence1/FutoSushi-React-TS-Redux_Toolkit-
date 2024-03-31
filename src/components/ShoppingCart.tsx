import React from "react";

const ShoppingCart: React.FC = () => {
  // Предположим, что у вас есть массив товаров в корзине cartItems
  const cartItems = [
    { id: 1, name: "Product 1", price: 100, quantity: 2 },
    { id: 2, name: "Product 2", price: 150, quantity: 1 },
    // Добавьте дополнительные товары при необходимости
  ];

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div>{item.name}</div>
            <div>Quantity: {item.quantity}</div>
            <div>Price: ${item.price}</div>
            {/* Добавьте кнопки для удаления товара из корзины и изменения количества, если необходимо */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
