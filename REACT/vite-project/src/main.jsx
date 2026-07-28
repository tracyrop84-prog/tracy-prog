import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navigation from "./amazonPage/navigation";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navigation/>
  </StrictMode>,
);
