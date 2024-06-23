import "./App.css";
import Evento from "./Components/Evento";
import Loading from "./Components/Loading";
import Notification from "./Components/Notification";
function App() {
  return (
    <div className="flex bg-red-500 h-screen items-center self-center">
      {/*<Loading />*/}
      {/*<div className="h-4/6">Mapa</div>
      <Evento />
      <Evento />
      <Evento />*/}
      <Notification />
    </div>
  );
}

export default App;
