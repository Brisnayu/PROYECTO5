import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Spinner from "./components/Spinner/Spinner.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WeatherContextProvider } from "./context/weatherContext.jsx";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const NextDay = lazy(() => import("./pages/NextDay/NextDay.jsx"));
const OtherCities = lazy(() => import("./pages/OtherCities/OtherCities.jsx"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound.jsx"));

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WeatherContextProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<App />}>
            <Route
              index
              element={
                <React.Suspense fallback={<Spinner />}>
                  <Home />
                </React.Suspense>
              }
            />

            <Route
              path="/NextDay"
              element={
                <React.Suspense fallback={<Spinner />}>
                  <NextDay />
                </React.Suspense>
              }
            />
            <Route
              path="/OtherCities"
              element={
                <React.Suspense fallback={<Spinner />}>
                  <OtherCities />
                </React.Suspense>
              }
            />
            <Route
              path="*"
              element={
                <React.Suspense fallback={<Spinner />}>
                  <NotFound />
                </React.Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </WeatherContextProvider>
  </React.StrictMode>
);
