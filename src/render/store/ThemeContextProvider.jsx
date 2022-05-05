import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeContextProvider(props) {
    const [theme, setTheme] = useState("light");

    const setLightModeHandler = () => {
        setTheme("light");
    };

    const setDarkModeHandler = () => {
        setTheme("dark");
    };


    const themeContext = {
        theme: theme,
        setLightMode: setLightModeHandler,
        setDarkMode: setDarkModeHandler
    };
    return (
        <ThemeContext.Provider value={themeContext} >
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;