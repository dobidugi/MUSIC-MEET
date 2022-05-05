import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import ThemeContext from "./../../store/ThemeContext";

const Div = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme === "light" ? "" : "rgb(1,5,11)"};
`;

function Content(props) {
    const ctx = useContext(ThemeContext);
    useEffect(() => {
        
    },[ctx.theme]);
    return (
        <Div theme={ctx.theme}>{props.children}</Div>
    );
}

export default React.memo(Content);