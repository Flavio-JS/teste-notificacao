import { NextPage } from "next";
import { useEffect, useState } from "react";

const PermissaoPage: NextPage = () => {
  const [permission, setPermission] = useState<
    "default" | "denied" | "granted"
  >("default");

  const requestPermission = async () => {
    const result = await Notification.requestPermission();
    setPermission(result);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && Notification.permission) {
      console.log(Notification.permission);
      setPermission(Notification.permission);
    }
  }, []);

  const handleNotificationClick = () => {
    const notification = new Notification("Exemplo de Notificação", {
      body: "Essa é uma notificação de exemplo.",
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
      <br />
      permissão de notificação: {permission}
    </div>
  );
};

export default PermissaoPage;
