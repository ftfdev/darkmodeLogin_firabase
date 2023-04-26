import { useTheme } from "../../hook/useTheme";

const Switch = () => {
  const [theme, handleChange] = useTheme("dark");

  return (
    <div>
      <input
        className="switch"
        type="checkbox"
        onChange={handleChange}
        checked={theme === "dark"}
      />
    </div>
  );
};

export default Switch;
