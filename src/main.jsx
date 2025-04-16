import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import InterfaceA from "./InterfaceA.jsx";
import InterfaceB from "./InterfaceB.jsx";
import InterfaceC from "./InterfaceC.jsx";
import InterfaceD from "./InterfaceD.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InterfaceA />
    <InterfaceB />
    <InterfaceC />
    <InterfaceD />
  </StrictMode>
);
