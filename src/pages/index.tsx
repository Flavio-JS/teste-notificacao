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
      body: "VAI LÁ VER O PORTAL SEU PILANTRINHA",
    });
    notification.onclick = (event) => {
      event.preventDefault();
      window.open("https://teste-notificacao-mwxgov3qo-flavio-js.vercel.app/");
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
