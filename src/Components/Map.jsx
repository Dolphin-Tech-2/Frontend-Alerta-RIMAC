import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, marker, point } from "leaflet";
import ambulanceIcon from "../assets/IconsImages/Ambulancia.png";
import AccidenteVehicularIcon from "../assets/IconsImages/AccidenteVehicular.png";
import IncendioIcon from "../assets/IconsImages/Incendio.png";
import RescateIcon from "../assets/IconsImages/Rescate.png";
import EventosEspeciales from "../assets/IconsImages/EventosEspeciales.png";
import MaterialesPeligrosos from "../assets/IconsImages/MaterialesPeligrosos.png";
import Sismo from "../assets/IconsImages/Sismo.png";
import { NavLink, useNavigate } from "react-router-dom";
import useEventsStore from "../store/eventsData";

const customIcon = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconSize: [38, 38], // size of the icon
});
/* 

const customAbulanciaIcon = new Icon({
  iconUrl: ambulanceIcon,
  iconSize: [38, 38], // size of the icon
});
const customAccidenteVehicularIcon = new Icon({
  iconUrl: AccidenteVehicularIcon,
  iconSize: [38, 38], // size of the icon
});
const customIncendioIcon = new Icon({
  iconUrl: IncendioIcon,
  iconSize: [38, 38], // size of the icon
});
const customRescateIcon = new Icon({
  iconUrl: RescateIcon,
  iconSize: [38, 38], // size of the icon
});
const customEventosEspecialesIcon = new Icon({
  iconUrl: EventosEspeciales,
  iconSize: [38, 38], // size of the icon
});
const customMaterialesPeligrososIcon = new Icon({
  iconUrl: MaterialesPeligrosos,
  iconSize: [38, 38], // size of the icon
});
const customSismoIcon = new Icon({
  iconUrl: Sismo,
  iconSize: [38, 38], // size of the icon
});
*/
/*
let markers = [
  {
    geocode: [-12.092918, -77.025284],
    popUp: "Hello, I am pop up 1 <br />",
    type: customRescateIcon,
    id: 1,
  },
  {
    geocode: [-12.0946, -77.027698],
    popUp: "Hello, I am pop up 2",
    type: customMaterialesPeligrososIcon,
    id: 2,
  },
  {
    geocode: [-12.095042, -77.024384],
    popUp: "Hello, I am pop up 3",
    type: customSismoIcon,
    id: 3,
  },
];*/
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

const Map = ({ latitud, longitud, eventosMapa }) => {
  const position = [latitud, longitud];
  const { events } = useEventsStore();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(events, "eventos desde map");
  }, [events]);
  return (
    <div className="flex h-4/6 w-screen self-center items-center mb-8">
      <MapContainer center={position} zoom={17} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle
          center={position}
          pathOptions={{ fillColor: "red" }}
          radius={200}
        />
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
        >
          {/*{ lat: marker.latitud, lng: marker.longitud } */}
          {events &&
            events.map((marker) => (
              <Marker
                position={{ lat: marker.latitud, lng: marker.longitud }}
                icon={customIcon}
                key={marker.latitud + marker.longitud}
              >
                <NavLink to={`/Informe/${marker.id}`}>
                  <Popup>
                    <a href={`/Informe/${marker.id}`}>Ver más</a>
                  </Popup>
                </NavLink>
              </Marker>
            ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default Map;
