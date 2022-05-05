import React from "react";

const ThemeContext = React.createContext({
    theme: "light",
    setLightMode: () => {},
    setDarkMode: () => {},

});
export default ThemeContext;