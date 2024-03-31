import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./styles/main.scss"; // Подключение глобальных стилей
import App from "./App.tsx";
import store from "./Redux/store.ts";

// import store from "./store/store.ts"; // Импорт хранилища из отдельного файла

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
