import { useEffect } from "react";
import "./NextDay.css";

import CardNextDays from "../../components/CardNextDays/CardNextDays";
import usePetition from "../../hook/usePetition";
import InfoNotFound from "../../components/InfoNotFound/InfoNotFound";

const NextDay = () => {

  useEffect(() => {
    getWeatherPosition();
  }, []);

  const {
    getWeatherPosition,
    denied,
    stateLat,
    stateLon
  } = usePetition();


  return (
    <main>
      {denied === true ? (
        <InfoNotFound
          gifCat="./gif-denied.gif"
          alt="Gif cat denied"
          text="Si quieres saber el tiempo en tu dirección actual, debes autorizar la geolocalización en tu navegador."
        />
      ) : (
            <article className="container-nextday">
              <CardNextDays stateLat={stateLat} stateLon={stateLon}/>
            </article>
      )}
    </main>
  );
};

export default NextDay;
