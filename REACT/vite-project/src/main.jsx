import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SideEffectsConditions from "./SideEffectsConditions/StopWatch"

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <SideEffectsConditions/>
  </StrictMode>
);
