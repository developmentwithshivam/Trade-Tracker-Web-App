import React, { StrictMode } from "react";
import './index.css';
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
