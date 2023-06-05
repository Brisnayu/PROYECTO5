import "./WeatherCities.css";
import { GeoCoordinates } from "../../utils/GeoCoordinates";

const WeatherCities = ({ setCurrentCity }) => {

  return (
    <select
      name="cities"
      id="cities"
      onChange={(event) => setCurrentCity(event.target.value)}
    >
      {GeoCoordinates.map((city) => (
        <option key={city.id} value={city.name}>
          {city.name}
        </option>
      ))}
    </select>
  );
};

export default WeatherCities;