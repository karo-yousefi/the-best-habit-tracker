import { createContext, useState, useEffect } from "react";

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habitList, setHabitList] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habitList));
  }, [habitList]);

  return (
    <HabitContext.Provider value={{ habitList, setHabitList }}>
      {children}
    </HabitContext.Provider>
  );
};
