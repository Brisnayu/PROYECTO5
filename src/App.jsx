import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import { imgPrueba } from "./utils/ImageCities";
import { imageCities } from "./utils/ImageCities";

const App = () => {

imageCities();

  return (
    <div className="app" style={{ backgroundImage: `url(${imgPrueba})` }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
