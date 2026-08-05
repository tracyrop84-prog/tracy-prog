import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StateAndEvents from "./StateAndEvents/ColorsAndCircles"

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <StateAndEvents/>
  </StrictMode>
);
