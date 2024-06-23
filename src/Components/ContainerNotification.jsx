import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Notification from "./Notification";

const ContainerNotification = () => {
  const [notification, setNotification] = useState("");
  const [date, setDate] = useState(new Date());
  const [statusNotification, setStatusNotification] = useState(false);

  useEffect(() => {
    const socket = io("http://localhost:3000");

    socket.on("notification", (data) => {
      setStatusNotification(true);
      setNotification(data?.message?.gemini_output);
      setDate(new Date(data.date));
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
      } transition-all duration-500 absolute`}
    >
      <Notification description={notification} />
    </div>
  );
};

export default ContainerNotification;
