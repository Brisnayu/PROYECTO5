
import { useContext } from "react";
import { WeatherContext } from "../context/weatherContext";

export let imgPrueba = ""

export const imageCities = () => {
    const { currentCity } = useContext(WeatherContext);
    
    if (currentCity === "Barcelona") {
       imgPrueba = "https://res.cloudinary.com/dx8j6h1rb/image/upload/v1686041717/Proyecto%205%2C%20Clima/Cities/BCN_ix9red.jpg";
   } else if (currentCity === "Rome") {
        imgPrueba = "https://res.cloudinary.com/dx8j6h1rb/image/upload/v1686041708/Proyecto%205%2C%20Clima/Cities/ROME_emiblo.jpg";
   } else if (currentCity === "Paris 01") {
        imgPrueba = "https://res.cloudinary.com/dx8j6h1rb/image/upload/v1686041709/Proyecto%205%2C%20Clima/Cities/PARIS_vezv00.jpg";
   } else if (currentCity === "Caracas") {
        imgPrueba = "https://res.cloudinary.com/dx8j6h1rb/image/upload/v1686041707/Proyecto%205%2C%20Clima/Cities/CCS_kdpvez.jpg";
   } else if (currentCity === "Edinburgh") {
        imgPrueba = "https://res.cloudinary.com/dx8j6h1rb/image/upload/v1686041708/Proyecto%205%2C%20Clima/Cities/EDIN_kw7utp.jpg";
   } else if (currentCity === "Distrito Capital de Bogotá") {
    imgPrueba = "https://res.cloudinary.com/dx8j6h1rb/image/upload/v1686041708/Proyecto%205%2C%20Clima/Cities/BTA_gbu5oa.jpg";
   } else {
       imgPrueba = "https://res.cloudinary.com/dx8j6h1rb/image/upload/v1686041709/Proyecto%205%2C%20Clima/Cities/ALASKA_wgqld8.jpg";
   }
}
