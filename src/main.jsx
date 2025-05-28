import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HabitProvider } from './context/HabitContext.jsx';
import { MiscProvider } from "./context/MiscContext.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HabitProvider>
      <MiscProvider>
        <App />
      </MiscProvider>
    </HabitProvider>
  </StrictMode>,
)
