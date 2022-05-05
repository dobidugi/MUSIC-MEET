import React from "react";
import classes from "./SubMenuItem.module.css";
function SubMenuItem(props) {
    return (
        <li key={props.key} className={classes.item}>{props.children}</li>
    );
}

export default SubMenuItem;