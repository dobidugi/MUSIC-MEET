import React from "react";
import Header from "./components/Layout/Header/Header";
import ThemeContextProvider from "./store/ThemeContextProvider";


function App() {
    return (
        <ThemeContextProvider>
            <Header />
        </ThemeContextProvider>
    );
}
export default App;