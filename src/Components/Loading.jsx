import React from "react";
import Logo from "../assets/logoxd.png";

const Loading = () => {
  return (
    <div className="bg-gradient-to-b from-red-500 to-red-700 flex items-center justify-center h-screen w-screen">
      <img src={Logo} className="max-w-full h-auto" />
    </div>
  );
};

export default Loading;
