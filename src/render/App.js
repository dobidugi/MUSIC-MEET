import React, { useContext, useEffect } from "react";
import Header from "./components/Layout/Header/Header";
import ThemeContextProvider from "./store/ThemeContextProvider";
import ThemeContext from "./store/ThemeContext";
import Content from "./components/UI/Content";

function App() {
    const ctx = useContext(ThemeContext);
    useEffect(() => {
        console.log(ctx.theme);
    },[ctx.theme]);
    return (
        <ThemeContextProvider>
            <Content>
                <Header />
            </Content>
        </ThemeContextProvider>
    );
}
export default App;