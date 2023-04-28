import { NextPage } from "next";
import { useState } from "react";

const PermicaoPage: NextPage = () => {
  const [permission, setPermission] = useState(Notification.permission);

  const requestPermission = async () => {
    const result = await Notification.requestPermission();
    setPermission(result);
  };

  const handleNotificationClick = () => {
    const notification = new Notification("Exemplo de Notificação", {
      body: "Essa é uma notificação de exemplo.",
      icon: "/path/to/icon.png",
    });
    notification.onclick = (event) => {
      event.preventDefault();
      window.open("https://www.seusite.com.br");
    };
  };

  return (
    <div>
      {permission === "granted" ? (
        <button onClick={handleNotificationClick}>Enviar Notificação</button>
      ) : (
        <button onClick={requestPermission}>Permitir Notificações</button>
      )}
    </div>
  );
};

export default PermicaoPage;
