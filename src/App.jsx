import "./App.css";
import Evento from "./Components/Evento";
import Loading from "./Components/Loading";
import Notification from "./Components/Notification";
import "leaflet/dist/leaflet.css";
import Map from "./Components/Map";
function App() {
  return (
    <div>
      <Map />
      <Evento />
      <Evento />
      <Evento />
    </div>
  );
}

export default App;
