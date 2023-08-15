import { useReducer } from "react";
import { LevelContext, initialState } from "./LevelContext";

const ACTION_TYPES = {
  CHANGE_THEME: "CHANGE_THEME",
  UPDATE_LEVEL: "UPDATE_LEVEL"
};

const levelReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_THEME:
      return {
        ...state,
        theme: action.theme
      };

    case ACTION_TYPES.UPDATE_LEVEL:
      return {
        ...state,
        level: action.level
      };

    default:
      return state;
  }
};

export default function LevelProvider({ children }) {
  const [state, dispatch] = useReducer(levelReducer, initialState);

  const updateLevel = (level) =>
    dispatch({
      type: ACTION_TYPES.UPDATE_LEVEL,
      level
    });

  const updateTheme = (theme) =>
    dispatch({
      type: ACTION_TYPES.CHANGE_THEME,
      theme
    });

  return (
    <LevelContext.Provider
      value={{ ...state, updateLevel, updateTheme, dispatch }}
    >
      {children}
    </LevelContext.Provider>
  );
}
