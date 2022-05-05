import React, { useContext } from "react";
import RouteMenu from "./RouteMenu/RouteMenu";
import classes from "./Header.module.css";
import SubMenu from "./SubMenu/SubMenu";
import ThemeContext from "../../../store/ThemeContext";
import styled from "styled-components";

const HeaderComponent = styled.header `
    background: ${props => props.theme === "light" ? "rgb(253,101,50)" : "rgb(22,25,31)" };
`;
function Header() {
    const ctx = useContext(ThemeContext);
    return (
        <HeaderComponent theme={ctx.theme} className={classes.header}>
            <div>MUSIC MEET</div>
            <RouteMenu />
            <SubMenu />
        </HeaderComponent>
    );
}

export default Header;