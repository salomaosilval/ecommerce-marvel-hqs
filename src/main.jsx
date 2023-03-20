import React from "react";
import ReactDOM from "react-dom/client";

import { GlobalStyle } from "./styles/globalStyles";

import { CartProvider } from "./contexts/CartContext";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <GlobalStyle />
      <App />
    </CartProvider>
  </React.StrictMode>
);
