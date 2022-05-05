import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import classes from "./SubMenu.module.css";
import SubMenuItem from "./SubMenuItem";

function SubMenu() {
    const items = [
        <LoginIcon key={null} />,
        <LogoutIcon key={null} />,
        <NightsStayIcon key={null} />,
        <Brightness4Icon key={null} />
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