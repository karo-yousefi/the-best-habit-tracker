import { createContext, useState, useEffect } from "react";
import { defaultSettings } from "../data/data";

export const MiscContext = createContext();

export const MiscProvider = ({ children }) => {
  const [miscInfo, setMiscInfo] = useState(() => {
    const saved = localStorage.getItem("miscInfo");
    return saved ? JSON.parse(saved) : {...defaultSettings} ;
  });

  useEffect(() => {
    localStorage.setItem("miscInfo", JSON.stringify(miscInfo));
  }, [miscInfo]);

  return (
    <MiscContext.Provider value={{ miscInfo, setMiscInfo }}>
      {children}
    </MiscContext.Provider>
  );
};
