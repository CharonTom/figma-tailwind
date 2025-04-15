import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import InterfaceA from "./InterfaceA.jsx";
import InterfaceC from "./InterfaceC.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InterfaceA />
    <InterfaceC />
  </StrictMode>
);
