import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import Map from "./Map";
import Evento from "./Evento";
import useEventsStore from "../store/eventsData";


const MapEvents = ({ latitud, longitud, eventos }) => {
  const {events} = useEventsStore();
  useEffect(() => {
    console.log(events, "eventos desde eventDetails");
  }
  ,[events]);

  return (
    <div>
      <Map latitud={events[0].latitud} longitud={events[0].longitud} />
      {events &&
        events.map((evento) => <Evento key={evento.id} evento={evento} />)}
    </div>
  );
};

export default MapEvents;
