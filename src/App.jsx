import { useState } from "react";
import "./App.css";
import CenterDiv from "./components/CenterDiv";
import MessageWindow from "./components/MessageWindow";
import UpperLine from "./components/UpperLine";
import Slogan from "./components/Slogan";

function App() {
    const [dispalay1, setDispalay1] = useState(false);
    const [dispalay2, setDispalay2] = useState(false);
    const [active, setActive] = useState(true);

    const openWindow1 = () => {
        setDispalay1(!dispalay1);
    };

    const openWindow2 = () => {
        setDispalay2(!dispalay2);
    };

    const activeBtn = () => {
        setActive(!active);
    };

    return (
        <div className="main">
            <UpperLine />
            <MessageWindow
                messeg={"Режим визуализации художественных произведений"}
                display_none={dispalay1}
            />
            <MessageWindow
                messeg={"Режим визуализации научных определений"}
                display_none={dispalay2}
            />
            <Slogan activeBtn={activeBtn} active={active} />
            <CenterDiv
                openWindow1={openWindow1}
                openWindow2={openWindow2}
                active={active}
            />
        </div>
    );
}

export default App;
