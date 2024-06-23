import React from "react";
import "leaflet/dist/leaflet.css";
import Map from "./Map";
import Evento from "./Evento";
const MapEvents = ({ latitud, longitud, eventos }) => {
  return (
    <div>
      <Map latitud={latitud} longitud={longitud} />
      {eventos &&
        eventos.map((evento) => <Evento key={evento.id} evento={evento} />)}
    </div>
  );
};

export default MapEvents;
