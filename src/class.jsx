import "./App.css";

import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLoaderData,
} from "react-router-dom";
import Notification from "./Components/Notification";
import { useEffect, useState } from "react";
import Detalles from "./Components/Detalles";
import MapEvents from "./Components/MapEvents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "Eventos",
        element: <MapaLoc />,
      },
      {
        path: "Informe/:eventName",
        element: <InfDetalles />,
        async loader({ params }) {
          let name = params.eventName;
          return name;
        },
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
function Root() {
  return (
    <>
      <Outlet />
    </>
  );
}

function MapaLoc() {
  const [location, setLocation] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);
  return (
    <div>
      {location && (
        <>
          <MapEvents latitud={location.lat} longitud={location.lng} />
        </>
      )}
    </div>
  );
}
function InfDetalles() {
  const eventName = useLoaderData();
  return (
    <div>
      <Detalles />
    </div>
  );
}
