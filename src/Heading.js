import { useLevel } from "./LevelContext.js";

export default function Heading({ children }) {
  const { level, theme } = useLevel();

  switch (level) {
    case 0:
    case 1:
      return <h1 style={{ color: theme }}>{children}</h1>;
    case 2:
      return <h2 style={{ color: theme }}>{children}</h2>;
    case 3:
      return <h3 style={{ color: theme }}>{children}</h3>;
    case 4:
      return <h4 style={{ color: theme }}>{children}</h4>;
    case 5:
      return <h5 style={{ color: theme }}>{children}</h5>;
    case 6:
      return <h6 style={{ color: theme }}>{children}</h6>;
    default:
      throw Error("Unknown level: " + level);
  }
}
