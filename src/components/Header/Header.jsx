import "./Header.css";

import { NavLink } from "react-router-dom";

const Header = () => {

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/NextDay">Próximos días</NavLink>
          </li>
          <li>
            <NavLink to="/OtherCities">Otras ciudades</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
