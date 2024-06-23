import React from "react";
import alerta from "../assets/alerta.png";
import dateFormater from "../utils/dateFormater";
import { NavLink } from "react-router-dom";

const Evento = ({ evento }) => {
  return (
    <div className="bg-white flex flex-row items-center space-x-5 px-4 py-2 rounded-2xl shadow-xl m-2">
      <img src={alerta} alt={evento.tipo} className="w-16 h-auto" />
      <div>
        <div className="flex flex-row items-center justify-between gap-3.5">
          <h1 className="text font-bold uppercase tex-sm">
            {evento.tipo.split(" ").slice(0, 2).join(" ")}
          </h1>
          <p className="text-xs text-right">{dateFormater(evento.fecha)}</p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-xs uppercase items-start">{evento.tipo}</p>
          <NavLink to={`/Informe/${evento.id}`}>
            <button className="bg-gray-900 text-white text-[10px] px-2 py-1 rounded-full uppercase items-end w-24 h-8">
              Ver más
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Evento;
