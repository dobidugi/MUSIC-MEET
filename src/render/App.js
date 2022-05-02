import React from "react";
import style from "./test.module.css";
import "./testpink.css";
import Test from "./components/Test";
function App() {
    return (
        <div> 
            <p className="pink">PINK</p>
            <p className={style.red}>RED</p>
            <Test />
        </div>
    );
}
export default App;