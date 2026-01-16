import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";

window.addEventListener("error", (e) => {
  const el = document.getElementById("root");
  if (el && !el.hasChildNodes()) {
    el.innerHTML = `<div style="padding:16px;font-family:system-ui;color:#fff">
      <div style="font-weight:700;margin-bottom:8px">Error cargando la app</div>
      <div style="opacity:.75;font-size:14px">${String(e?.message || e)}</div>
      <div style="opacity:.6;font-size:12px;margin-top:8px">Abre la consola (F12) para ver el detalle.</div>
    </div>`;
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
