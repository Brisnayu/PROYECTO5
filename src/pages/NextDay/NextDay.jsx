import { useState, useEffect } from "react";
import "./NextDay.css";

import CardNextDays from "../../components/CardNextDays/CardNextDays";

const NextDay = () => {
  //Obteniendo coordenadas del ordenador!
  const [stateLat, setStateLat] = useState();
  const [stateLon, setStateLon] = useState();
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setStateLat(position.coords.latitude.toFixed(2));
      setStateLon(position.coords.longitude.toFixed(2));
    });
  }, []);

  return (
    <main>
        <article className="container-nextday">
          <CardNextDays
            stateLat={stateLat}
            stateLon={stateLon}
          />
        </article>
    </main>
  );
};

export default NextDay;