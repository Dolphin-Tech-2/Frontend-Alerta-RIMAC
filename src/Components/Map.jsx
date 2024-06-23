import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import ambulanceIcon from "../assets/IconsImages/Ambulancia.png";
import AccidenteVehicularIcon from "../assets/IconsImages/AccidenteVehicular.png";
import IncendioIcon from "../assets/IconsImages/Incendio.png";
import RescateIcon from "../assets/IconsImages/Rescate.png";
import EventosEspeciales from "../assets/IconsImages/EventosEspeciales.png";
import MaterialesPeligrosos from "../assets/IconsImages/MaterialesPeligrosos.png";
import Sismo from "../assets/IconsImages/Sismo.png";

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

let markers = [
  {
    geocode: [-12.092918, -77.025284],
    popUp: "Hello, I am pop up 1 <br />",
    type: customRescateIcon,
  },
  {
    geocode: [-12.0946, -77.027698],
    popUp: "Hello, I am pop up 2",
    type: customMaterialesPeligrososIcon,
  },
  {
    geocode: [-12.095042, -77.024384],
    popUp: "Hello, I am pop up 3",
    type: customSismoIcon,
  },
];
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

const Map = ({ latitud, longitud }) => {
  const position = [latitud, longitud];
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
          {markers.map((marker) => (
            <Marker
              position={marker.geocode}
              icon={marker.type}
              key={marker.geocode}
            >
              <Popup>
                {marker.popUp}
                <a href="www.google.com">Click me</a>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default Map;
