import "./WeatherCities.css";
import { GeoCoordinates } from "../../utils/GeoCoordinates";

const WeatherCities = ({
  setCurrentCity,
  currentCity,
  dateCurrent,
  setDateCurrent,
}) => {
  return (
    <>
      <label htmlFor="cities">
        <h3>Selecciona una ciudad</h3>
      </label>

      <select
        name="cities"
        className="style-select"
        value={currentCity}
        onChange={(event) => setCurrentCity(event.target.value)}
      >
        {GeoCoordinates.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>

      <label htmlFor="next-weather">
        <h3>El tiempo</h3>
      </label>

      <select
        name="next-days"
        className="style-select"
        value={dateCurrent}
        onChange={(event) => setDateCurrent(event.target.value)}
      >
        <option value="today">Hoy</option>
        <option value="next-days">Resto de la semana</option>
      </select>
    </>
  );
};

export default WeatherCities;
