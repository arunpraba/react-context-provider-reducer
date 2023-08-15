import { useLevel } from "./LevelContext";

export default function ToolbarSection() {
  const { updateTheme } = useLevel();
  return (
    <section className="section">
      <button onClick={() => updateTheme("red")}>RED</button>
      <button onClick={() => updateTheme("green")}>GREEN</button>
      <button onClick={() => updateTheme("blue")}>BLUE</button>
    </section>
  );
}
