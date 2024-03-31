import React from "react";
import "../styles/Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <h3>Contact Us</h3>
        <p>Email: info@myfurniturestore.com</p>
        <p>Phone: 123-456-7890</p>
        {/* Добавьте дополнительные контактные данные, если необходимо */}
      </div>
      <div className="social-links">
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a href="https://facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com">Twitter</a>
          </li>
          {/* Добавьте дополнительные ссылки на социальные сети, если необходимо */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
