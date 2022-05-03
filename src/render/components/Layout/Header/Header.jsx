import React from "react";
import RouteMenu from "./RouteMenu";
import classes from "./Header.module.css";
import SubMenu from "./SubMenu";
function Header() {
    return (
        <header className={classes.header}>
            <div>MUSIC MEET</div>
            <RouteMenu />
            <SubMenu />
        </header>
    );
}

export default Header;