import { useState } from "react";
import "./App.css";
import CenterDiv from "./components/CenterDiv";
import MessageWindow from "./components/MessageWindow";
import UpperLine from "./components/UpperLine";

function App() {

    const [dispalay1, setDispalay1] = useState(false);
    const [dispalay2, setDispalay2] = useState(false);

    const openWindow1 = () => {
        setDispalay1(!dispalay1);
    };

    const openWindow2 = () => {
        setDispalay2(!dispalay2);
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
            <CenterDiv openWindow1={openWindow1} openWindow2={openWindow2} />
        </div>
    );
}

export default App;
