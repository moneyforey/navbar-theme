import { useContext } from "react";
import { themeContext } from "../context/themeContext";

const styleL = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  border: "1px solid teal",
  borderRadius: "0.5rem"
};
const styleD = {
  backgroundColor: "black",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  border: "1px solid teal",
  borderRadius: "0.5rem"
};
export default function Navbar() {
  const { isDarkMode, handleTheme } = useContext(themeContext);
  // console.log(isDarkMode);

  return (
    <div style={isDarkMode.status ? styleD : styleL}>
      <h3>Home</h3>
      <div>
        <input type="text" />
        <button>Search</button>
      </div>
      <h3>login</h3>
      <button
        onClick={() => handleTheme(!isDarkMode.status)}
        style={{ borderRadius: "50%" }}
      >
        {!isDarkMode.status ? "Dark" : "Light"}
      </button>
    </div>
  );
}
