import React from "react";
import classes from "./SubMenuItem.module.css";
function SubMenuItem(props) {
    return (
        <li {...props} className={classes.item}>{props.children}</li>
    );
}

export default SubMenuItem;