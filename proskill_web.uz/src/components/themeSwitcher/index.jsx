import { useContext } from "react";
import { ThemeContext } from "../../../context/themeContext";
import { MdSunny } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";
import "./styles.sass";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className='themeToggle'
    >
      {theme === "light" ? <IoMoonSharp /> : <MdSunny />}
    </button>
  );
};

export default ThemeToggle;
