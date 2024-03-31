import React from "react";
import "../styles/Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../Redux/Cart/cartSlice";
import { RootState } from "../Redux/store";
import Cart from "../pages/Cart";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state: RootState) => state.cart.isOpen);

  const handleCartToggle = () => {
    dispatch(toggleCart());
  };

  return (
    <header className="header">
      <button className="logo">
        <img className="logoimg" src="img/лого.png" alt="png" />
      </button>
      <input type="text" className="search-input" placeholder="Поиск..." />
      <div className="additional-buttons">
        <button className="login-button">
          <i className="fas fa-sign-in-alt fa-lg"></i>{" "}
        </button>
        <button className="cart-button" onClick={handleCartToggle}>
          <i className="fas fa-shopping-cart fa-lg"></i>{" "}
        </button>
        {isCartOpen && <Cart />}{" "}
      </div>
    </header>
  );
};

export default Header;
