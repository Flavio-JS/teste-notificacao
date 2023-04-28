import { NextPage } from "next";
import { useEffect } from "react";

const PermissaoPage: NextPage = () => {
  const requestPermission = async () => {
    await Notification.requestPermission();
  };

  useEffect(() => {
    requestPermission();
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

  if (typeof window === "undefined") {
    // retorna null no ambiente de servidor
    return null;
  }

  return (
    <div>
      <button onClick={handleNotificationClick}>Enviar Notificação</button>

      <button onClick={requestPermission}>Permitir Notificações</button>
    </div>
  );
};

export default PermissaoPage;
