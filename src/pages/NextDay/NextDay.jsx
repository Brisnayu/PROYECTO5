import { useState, useEffect } from "react";
import "./NextDay.css";
import Spinner from "../../components/Spinner/Spinner";
import CardNextDays from "../../components/CardNextDays/CardNextDays";

const NextDay = () => {
  //Obteniendo coordenadas del ordenador!
  const [stateLat, setStateLat] = useState();
  const [stateLon, setStateLon] = useState();
  const [direction, setDirection] = useState(false);

  const [weatherDay, setWeatherDay] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setStateLat(position.coords.latitude.toFixed(2));
      setStateLon(position.coords.longitude.toFixed(2));
    });
  }, []);

  const WEATHER_API_KEY = "dfad8d7ba7c96049c80872a31938271f";
  const WEATHER_API_FIVEDAYS = `https://api.openweathermap.org/data/2.5/forecast?lat=${stateLat}&lon=${stateLon}&appid=${WEATHER_API_KEY}`;

  const fetchData = async () => {
    setDirection(false);

    const data = await fetch(WEATHER_API_FIVEDAYS);
    const dataJSON = await data.json();
    // console.log(dataJSON);
    // console.log("DENTRO DEL FETCH", dataJSON.list);

    const newArray = dataJSON.list.filter((element, index) => {
      return [index + 9] % 8 === 0;
    });

    setWeatherDay(newArray);
    setDirection(true);
  };

  useEffect(() => {
    if (stateLat) {
      fetchData();
    }
  }, [stateLat]);

  // console.log(weatherDay);

  return (
    <main>
      {direction ? (
        <article className="container-nextday">
          <CardNextDays weatherArray={weatherDay} />
        </article>
      ) : (
        <Spinner />
      )}
    </main>
  );
};

export default NextDay;

// SEGURAMENTE SE HARÁ CON UN BUCLE! ESTO ES PARA EFECTO DE LA MAQUETACIÓN
