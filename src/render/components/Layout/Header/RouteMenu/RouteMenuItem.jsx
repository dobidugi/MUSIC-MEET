import React from "react";
import classes from "./RouteMenuItem.module.css";
function RouteMenuItem(props) {
    const { name } = props;
    console.log(name);
    return (
        <li className={classes.item}>
            <span>{name}</span>
        </li>
    );
}

export default RouteMenuItem;