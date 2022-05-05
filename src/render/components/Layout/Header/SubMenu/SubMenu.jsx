import React, { useContext } from "react";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import classes from "./SubMenu.module.css";
import SubMenuItem from "./SubMenuItem";
import ThemeContext from "../../../../store/ThemeContext";

function SubMenu() {
    const ctx = useContext(ThemeContext);
    const { theme, setDarkMode, setLightMode } = ctx;
    console.log(theme);
    const items = [
        <LoginIcon key={null} />,
        <LogoutIcon key={null} />,
        theme === "light" ? 
            <NightsStayIcon onClick={setDarkMode} key={null} /> : 
            <Brightness4Icon onClick={setLightMode} key={null} /> 
    ];
    return (
        <ul className={classes.list}>
            {items.map((item, index) => (
                <SubMenuItem key={index} >{item}</SubMenuItem>
            ))}
        </ul>
    );
}

export default SubMenu;