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
    </div>
  );
};

export default PermissaoPage;

// import { NextPage } from "next";
// import { useEffect } from "react";

// const PermissaoPage: NextPage = () => {
//   const requestPermission = async () => {
//     await Notification.requestPermission();
//   };

//   useEffect(() => {
//     requestPermission();
//   }, []);

//   const handleNotificationClick = () => {
//     const notification = new Notification("Exemplo de Notificação", {
//       body: "Essa é uma notificação de exemplo.",
//     });
//     notification.onclick = (event) => {
//       event.preventDefault();
//       window.open("https://www.seusite.com.br");
//     };
//   };

//   return (
//     <div>
//       <button onClick={requestPermission}>Permitir Notificações</button>
//       <button onClick={handleNotificationClick}>Enviar Notificação</button>
//     </div>
//   );
// };

// export default PermissaoPage;
