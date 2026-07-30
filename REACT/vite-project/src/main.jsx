import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AmazonPage from "./amazonPage";
createRoot(document.getElementById("root")).render(
  <StrictMode>
   <AmazonPage/>
  </StrictMode>
);
