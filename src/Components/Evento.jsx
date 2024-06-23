import React from "react";
import Ambulancia from "../assets//IconsImages/Ambulancia.png";

const Evento = () => {
  return (
    <div className="bg-white flex flex-row items-center space-x-5 px-4 py-2 rounded-2xl shadow-xl m-2">
      <img src={Ambulancia} alt="Ambulancia" className="w-16 h-auto" />
      <div>
        <div className="flex flex-row items-center justify-between">
          <h1 className="text font-bold uppercase">¡Alerta!</h1>
          <p className="text-sm">Hace 1 min</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-sm uppercase items-start">
            Se ha detectado un evento en tu zona
          </p>
          <button className="bg-gray-900 text-white text-xs px-2 py-1 rounded-full uppercase items-end w-24 h-8">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default Evento;
