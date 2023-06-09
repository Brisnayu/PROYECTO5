import { createContext, useState } from "react";

export const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [currentCity, setCurrentCity] = useState("Barcelona");

  return (
    <WeatherContext.Provider value={{ currentCity, setCurrentCity }}>
      {children}
    </WeatherContext.Provider>
  );
};
