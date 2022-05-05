import React from "react";

const ThemeContext = React.createContext({
    theme: "",
    setLightMode: () => {},
    setDarkMode: () => {},

});
export default ThemeContext;