import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Notification from "./Notification";
import dateFormater from "../utils/dateFormater";

const ContainerNotification = ({flag, setFlag}) => {
  const [title, setTitle] = useState("Alerta RIMAC");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [statusNotification, setStatusNotification] = useState(false);

  useEffect(() => {
    const socket = io("http://localhost:3000");

    socket.on("notification", (data) => {
      setStatusNotification(true);
      setFlag(!flag);
      setTitle(data?.evento?.tipo);
      setDescription(data?.evento?.gemini_output);
      setDate(dateFormater(data?.evento?.fecha));
      console.log(data);

      // Establecer un temporizador para ocultar la notificación después de 3 segundos
      setTimeout(() => {
        setStatusNotification(false);
      }, 5000);
    });

    // Cleanup on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div
      className={`${
        statusNotification
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      } transition-all duration-500 absolute z-50`}
    >
      <Notification description={description} title={title} time={date} />
    </div>
  );
};

export default ContainerNotification;
