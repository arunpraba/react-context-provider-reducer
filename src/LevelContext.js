import { createContext, useContext } from "react";

export const initialState = { level: 0, theme: "dark" };

export const LevelContext = createContext(null);

export const useLevel = () => {
  const context = useContext(LevelContext);
  if (!context) {
    throw Error("Context provider should be wrapper");
  }

  return context;
};
