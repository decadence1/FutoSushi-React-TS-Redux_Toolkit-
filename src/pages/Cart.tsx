import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/store";
import { toggleCart } from "../Redux/Cart/cartSlice";
import "../styles/Cart.scss";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state: RootState) => state.cart.isOpen);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartTotal = useSelector((state: RootState) => state.cart.total);

  const handleCloseCart = () => {
    dispatch(toggleCart());
  };

  return (
    <div className={`cart-container ${isCartOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Корзина</h2>
        <button className="close-button" onClick={handleCloseCart}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index}></div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Итого: {cartTotal}</h3>
      </div>
      <button className="checkout-button">Оформить заказ</button>
    </div>
  );
};

export default Cart;
