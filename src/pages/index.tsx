import { NextPage } from "next";
import { useEffect } from "react";

const HomePage: NextPage = () => {
  useEffect(() => {
    const requestPermission = async () => {
      const permission = await Notification.requestPermission();
      console.log("Permissão de notificação:", permission);
    };
    requestPermission();
  }, []);

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

  useEffect(() => {
    const interval = setInterval(() => {
      handleNotificationClick();
    }, 10 * 1000); // 10 segundos

    // return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <p>PÁGINA EXEMPLO</p>
    </div>
  );
};

export default HomePage;
