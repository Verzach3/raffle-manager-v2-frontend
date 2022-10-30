import { Command } from "@tauri-apps/api/shell";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const startRedis = async () => {
    const command = Command.sidecar("..\\bin\\redis\\redis-server", ["--port", "6379"]);
    const output = await command.execute();
};

startRedis();