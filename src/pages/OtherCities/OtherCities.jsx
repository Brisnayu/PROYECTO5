import "./OtherCities.css";
import { useContext, useState, useEffect } from "react";
import WeatherCities from "../../components/WeatherCities/WeatherCities";
import WeatherDates from "../../components/WeatherDates/WeatherDates";
import Spinner from "../../components/Spinner/Spinner";

import { WeatherContext } from "../../context/weatherContext";
import { GeoCoordinates } from "../../utils/GeoCoordinates";
import { imageCities } from "../../utils/ImageCities";
import ActualTemperature from "../../components/ActualTemperature/ActualTemperature";
import CardNextDays from "../../components/CardNextDays/CardNextDays";

const OtherCities = () => {
  const [dateCurrent, setDateCurrent] = useState("today");

  const { currentCity, setCurrentCity } = useContext(WeatherContext);

  const img = imageCities[currentCity];

  const currentCCityData = GeoCoordinates.filter(
    (city) => city.name === currentCity
  );

  const [latCurrentCity, setlatCurrentCity] = useState(
    currentCCityData[0].coord.lat
  );
  const [lonCurrentCity, setStatelonCurrentCity] = useState(
    currentCCityData[0].coord.lon
  );
  const [poli, setpoli] = useState(false);

  useEffect(() => {
    setlatCurrentCity(currentCCityData[0].coord.lat);
    setStatelonCurrentCity(currentCCityData[0].coord.lon);
  }, [currentCity]);

  // console.log("con el useState", latCurrentCity);
  // console.log("con el useState", lonCurrentCity);

  const [weatherDay1, setWeatherDay1] = useState([]);

  const WEATHER_API_KEY = "dfad8d7ba7c96049c80872a31938271f";
  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${latCurrentCity}&lon=${lonCurrentCity}&appid=${WEATHER_API_KEY}`;

  const fetchData1 = async () => {
    setpoli(false);
    const data = await fetch(WEATHER_API);
    const dataJSON = await data.json();
    setWeatherDay1(dataJSON);

    setpoli(true);
  };

  useEffect(() => {
    if (latCurrentCity) {
      fetchData1();
    }
  }, [lonCurrentCity, dateCurrent]);

  // AQUÍ NO FUNCIONA!!!

  console.log(weatherDay1);

  return (
    <>
      {poli ? (
        <main>
          <article
            className="background-image"
            style={{ backgroundImage: `url(${img})` }}
          />
          <article className="container-cities">
            <section className="section-cities cities-flex">
              <WeatherCities
                setCurrentCity={setCurrentCity}
                currentCity={currentCity}
                dateCurrent={dateCurrent}
                setDateCurrent={setDateCurrent}
              />
            </section>

            {dateCurrent === "today" ? (
              <section className="second-section">
                <ActualTemperature
                  styleInit="dates-sub cities-flex"
                  resWeather={weatherDay1}
                  styleSecond="dates-half cities-flex"
                  styleImage="img-time"
                />

                <div className="dates-lower">
                  <h3>{currentCity}</h3>

                  <div className="cities-principal">
                    <WeatherDates resWeather={weatherDay1} view="cities" />
                  </div>
                </div>
              </section>
            ) : (
              
                <CardNextDays
                  stateLat={latCurrentCity}
                  stateLon={lonCurrentCity}
                />
            
            )}
          </article>
        </main>
      ) : (
        <main>
          <Spinner />
        </main>
      )}
    </>
  );
};

export default OtherCities;
