import React from "react";
import rimacLogo from "../assets/RimacLogo.png"; // Importa la imagen

const Notification = () => {
  return (
    <div className="w-auto bg-white rounded-lg shadow-md p-4 border flex flex-col">
      <div className="flex items-center mb-2">
        <img
          src={rimacLogo}
          alt="RIMAC"
          className="w-12 h-12 border-2 rounded-lg overflow-hidden"
        />
        <div className="flex-grow pl-2">
          <h4 className="font-bold text-gray-900">Alerta RIMAC</h4>
        </div>
        <span className="text-sm text-gray-500">Hace un minuto</span>
      </div>
      <div className="">
        <h5 className="font-bold text-lg text-gray-800 mb-1">
          Incendio en Centro de Lima
        </h5>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet. Ut corporis reprehenderit in quia dicta et
          delenit
        </p>
      </div>
    </div>
  );
};

export default Notification;
