import "./OtherCities.css";
import { useContext } from "react";
import Today from "../../components/Today/Today";
import WeatherCities from "../../components/WeatherCities/WeatherCities";

import { WeatherContext } from "../../context/weatherContext";

const OtherCities = () => {
  const {currentCity, setCurrentCity} = useContext(WeatherContext);

  console.log(currentCity);

  return (
    <main>
      <article className="container-cities">
        <section className="section-cities">
          <label htmlFor="cities">
            <h3>Selecciona una ciudad</h3>
          </label>

          <WeatherCities setCurrentCity={setCurrentCity}/>

        </section>

        <section>
          <div className="dates-sub">
            <Today />
            <h2>24º</h2>
            <img
              src="https://i.pinimg.com/originals/02/5f/29/025f29a640db04a067d7a540a7b4d004.gif"
              alt="plane and world gif"
            />
          </div>
          <div className="dates-half">
            <h3>Mínima 50º - Máxima 70º</h3>
            <img src="../../../public/icon-wind.png" alt="icon weather today" />
            <p>Sensación térmica 34º</p>
          </div>
          <div className="dates-lower">
            <h3>{currentCity}</h3>
            CIUDAD, PAIS DEMAS DATOS: VIENTO, DIRECCIÓN DEL VIENTO, HUMEDAD,
            VISIBILIDAD, NUBES
          </div>
        </section>
      </article>
    </main>
  );
};

export default OtherCities;
