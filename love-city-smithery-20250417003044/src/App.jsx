import React, { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";

// Telegram WebApp SDK initialization, dark mode setup
useEffect(() => {
  if (window.Telegram && window.Telegram.WebApp) {
    window.Telegram.WebApp.ready();
    if (window.Telegram.WebApp.colorScheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
}, []);

function App() {
  const element = useRoutes(routes);
  return (
    <div className="bg-background min-h-screen">
      {element}
    </div>
  );
}
export default App;