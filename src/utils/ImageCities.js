
import { useContext } from "react";
import { WeatherContext } from "../context/weatherContext";

export let imgPrueba = ""

export const imageCities = () => {
    const { currentCity } = useContext(WeatherContext);
    
    if (currentCity === "Barcelona") {
       imgPrueba = "../public/img-cities/AOMORI.jpg";
   } else if (currentCity === "Rome") {
        imgPrueba = "../public/img-cities/ROME.jpg";
   } else {
       imgPrueba = "../public/img-cities/CCS.jpg";
   }
}
