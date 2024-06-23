import React from "react";
import "leaflet/dist/leaflet.css";
import Map from "./Map";
import Evento from "./Evento";
const MapEvents = ({ latitud, longitud }) => {
  return (
    <div>
      <Map latitud={latitud} longitud={longitud} />
      <Evento />
      <Evento />
      <Evento />
    </div>
  );
};

export default MapEvents;
