import { NavLink } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import useEventsStore from "../store/eventsData";


const Detalles = () => {
  const {events} = useEventsStore();
  useEffect(() => {
    console.log(events, "eventos desde dettales");
  }
  ,[events]);
  return (
    <>
      <section className="bg-ri-red h-screen">
        <div className="flex flex-col items-center gap-y-24 py-24"></div>
        <div className="gap-7 flex flex-col bg-ri-white rounded-t-[1.8rem] px-4 py-10 h-5/6 absolute bottom-0">
          <article className="space-y-3">
            <h1 className="text-ri-blue font-bold text-xl">Evento</h1>
            <p className="text-ri-text">{events[0].tipo}</p>
          </article>
          <article className="space-y-3">
            <h1 className="text-ri-blue font-bold text-xl">Fecha y Hora</h1>
            <p className="text-ri-text">{events[0].fecha}</p>
          </article>
          {/*<article className="space-y-4">
            <h1 className="text-ri-blue font-bold text-xl">Recomendaciones</h1>
            <p className="text-ri-text">{"por programar"}</p>
          </article>*/}

          {/* <article className="space-y-3">
            <h1 className="text-ri-blue font-bold text-xl">Lugar</h1>
            <figure className="h-16 w-full">
              <MapContainer
                center={[-12.092918, -77.025284]}
                zoom={17}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </MapContainer>
            </figure>
          </article>*/}
          <article className="space-y-3">
            <p className="text-5xl font-bold uppercase mt-9 text-center">Todo va a estar bien</p>
          </article>
          <NavLink to="/Eventos">
            <button className="bg-ri-red text-ri-white font-bold py-4 rounded-2xl items-baseline content-end w-[calc(100%-32px)] absolute bottom-4">
              Volver
            </button>
          </NavLink>
        </div>
      </section>
    </>
  );
};
export default Detalles;
