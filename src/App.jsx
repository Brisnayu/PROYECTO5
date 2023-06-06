import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import { imageCities } from "./utils/ImageCities";
import { useContext } from "react";
import { WeatherContext } from "./context/weatherContext";


const App = () => {
  const { currentCity } = useContext(WeatherContext);

  const img = imageCities[currentCity];

  return (
    <div className="app" style={{ backgroundImage: `url(${img})` }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
