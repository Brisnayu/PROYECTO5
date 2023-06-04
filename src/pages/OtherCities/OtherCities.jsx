import "./OtherCities.css";
import { GeoCoordinates } from "../../utils/GeoCoordinates";

const OtherCities = () => {
  return (
    <main>
      <label htmlFor="cities">
        <h3>Selecciona una ciudad</h3>
      </label>
      <select name="cities" id="cities">
        {GeoCoordinates.map((city) => 
          <option value={city.name}>{city.name}</option>
        )}
      </select>
    </main>
  );
};

export default OtherCities;
