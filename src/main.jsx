import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import InterfaceA from "./sections/InterfaceA.jsx";
import InterfaceB from "./sections/InterfaceB.jsx";
import InterfaceC from "./sections/InterfaceC.jsx";
import InterfaceD from "./sections/InterfaceD.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InterfaceA />
    <InterfaceB />
    <InterfaceC />
    <InterfaceD />
  </StrictMode>
);
