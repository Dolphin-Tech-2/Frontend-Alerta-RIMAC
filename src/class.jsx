import "./App.css";

import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLoaderData,
} from "react-router-dom";
import { getById, getByStatus } from "./api/peticiones.api";
import { useEffect, useState } from "react";
import Detalles from "./Components/Detalles";
import MapEvents from "./Components/MapEvents";
import Loading from "./Components/Loading";
import { useNavigate } from "react-router-dom";
import ContainerNotification from "./Components/ContainerNotification";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
  },
  { path: "/Eventos", element: <MapaLoc /> },
  {
    path: "/Informe/:eventName",
    element: <InfDetalles />,
    async loader({ params }) {
      let name = params.eventName;
      return name;
    },
  },
]);

export default function App() {
  const [flag, setFlag] = useState(false);
  const [eventos, setEventos] = useState([]);
  useEffect(() => {
    console.log("flag", flag);
    const fetchData = async () => {
      const result = await getById(1);
      setEventos(result);
      console.log(result);
    };
    fetchData();
  }, [flag]);
  return (
    <div>
      <ContainerNotification flag={flag} setFlag={setFlag} />
      <RouterProvider router={router} />;
    </div>
  );
}

function Root() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/Eventos");
    }, 1000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <>
      <Loading />
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
