import React from "react";
import "../styles/Sidebar.scss";
import { useDispatch } from "react-redux";

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Меню</h2>
      <ul className="sidebar-menu">
        <li>
          <button
            onClick={() => scrollToSection("rolls")}
            className="sidebar-link"
          >
            Роллы
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("sushi")}
            className="sidebar-link"
          >
            Суши
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("sets")}
            className="sidebar-link"
          >
            Сеты
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("baked-rolls")}
            className="sidebar-link"
          >
            Запеченные роллы
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("gunkans")}
            className="sidebar-link"
          >
            Гунканы
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("soups")}
            className="sidebar-link"
          >
            Супы
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("drinks")}
            className="sidebar-link"
          >
            Напитки
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
