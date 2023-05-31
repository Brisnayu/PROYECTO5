import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import NextDay from "./pages/NextDay/NextDay.jsx";
import OtherCities from "./pages/OtherCities/OtherCities.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/NextDay" element={<NextDay />} />
          <Route path="/OtherCities" element={<OtherCities />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
