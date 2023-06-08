import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";


const App = () => {

  return (
    <div className="app" >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
