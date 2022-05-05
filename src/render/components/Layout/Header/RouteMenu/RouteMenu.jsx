import React from "react";
import RouteMenuItem from "./RouteMenuItem";
import classes from "./RouteMenu.module.css";
function RouteMenu() {
    const ROUTES = [
        { name: "Menu1" },
        { name: "Menu2" },
        { name: "Menu3" },
        { name: "Menu4" },
        
    ];
    return (
        <ul className={classes.list}>
            {
                ROUTES.map((route, index) => 
                    <RouteMenuItem
                        key={index} 
                        name={route.name} 
                    />)
            }
        </ul>
    );
}

export default RouteMenu;