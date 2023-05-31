import "./Header.css";

import { NavLink } from "react-router-dom";

const Header = () => {

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/NextDay">Next Day</NavLink>
          </li>
          <li>
            <NavLink to="/OtherCities">Other Cities</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
