import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StateAndEvents from "./StateAndEvents/ClickMe"

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <StateAndEvents/>
  </StrictMode>
);
