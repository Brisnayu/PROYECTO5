import { useState, useContext } from "react";
import { WeatherContext } from "../context/weatherContext";
import { GeoCoordinates } from "../utils/GeoCoordinates";

const usePetition = () => {
  const [stateLat, setStateLat] = useState();
  const [stateLon, setStateLon] = useState();
  const [direction, setDirection] = useState(false);
  const [denied, setDenied] = useState(false);

  const [weatherDay, setWeatherDay] = useState([]);

  const { currentCity } = useContext(WeatherContext);

  const currentCCityData = GeoCoordinates.filter(
    (city) => city.name === currentCity
  );

  const getWeatherPosition = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setStateLat(position.coords.latitude);
        setStateLon(position.coords.longitude);
      },
      (err) => {
        if (err.code === err.PERMISSION_DENIED) {
          setDenied(true);
        }
      }
    );
  };

  const getWeatherCity = () => {
    setStateLat(currentCCityData[0].coord.lat);
    setStateLon(currentCCityData[0].coord.lon);
  };

  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${stateLat}&lon=${stateLon}&appid=${import.meta.env.VITE_API_KEY}`;

  const fetchData = async () => {
    setDirection(false);

    const data = await fetch(WEATHER_API);
    const dataJSON = await data.json();

    setWeatherDay(dataJSON);

    setDirection(true);
  };

  return {
    direction,
    denied,
    weatherDay,
    stateLat,
    stateLon,
    getWeatherPosition,
    getWeatherCity,
    fetchData,
  };
};

export default usePetition;
