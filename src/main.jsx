import React, { StrictMode } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { HashRouter } from "react-router-dom"; // ← use from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {/* <BrowserRouter> */}
        <HashRouter>
          <App />
        </HashRouter>
        {/* </BrowserRouter> */}
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
);
