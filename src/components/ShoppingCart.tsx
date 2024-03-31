import React from "react";

const ShoppingCart: React.FC = () => {
  const cartItems = [
    { id: 1, name: "Product 1", price: 100, quantity: 2 },
    { id: 2, name: "Product 2", price: 150, quantity: 1 },
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
