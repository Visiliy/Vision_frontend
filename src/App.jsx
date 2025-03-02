import { useState } from "react";
import "./App.css";
import CenterDiv from "./components/CenterDiv";
import MessageWindow from "./components/MessageWindow";
import UpperLine from "./components/UpperLine";
import Slogan from "./components/Slogan";
import ErrorWindow from "./components/ErrorWindow";

function App() {
    const [dispalay1, setDispalay1] = useState(false);
    const [dispalay2, setDispalay2] = useState(false);
    const [active, setActive] = useState(true);
    const [activeError, setActiveError] = useState(true);

    const openWindow1 = () => {
        setDispalay1(!dispalay1);
    };

    const openWindow2 = () => {
        setDispalay2(!dispalay2);
    };

    const activeBtn = () => {
        setActive(!active);
    };

    const activeProcess = () => {
        if (true) {
            activeErrorWindow();
        }
    }

    const activeErrorWindow = () => {
        setActiveError(prevActiveError => {
            return !prevActiveError;
        });
    
        setTimeout(() => {
            setActiveError(prevActiveError => {
                return !prevActiveError;
            });
        }, 5000);
    };

    return (
        <div className="main">
            <UpperLine />
            <MessageWindow
                messeg={"Режим визуализации художественных произведений"}
                display_none={dispalay1}
                activeProcess={activeProcess}
            />
            <MessageWindow
                messeg={"Режим визуализации научных определений"}
                display_none={dispalay2}
                activeProcess={activeProcess}
            />
            <Slogan activeBtn={activeBtn} active={active} />
            <CenterDiv
                openWindow1={openWindow1}
                openWindow2={openWindow2}
                active={active}
            />
            <ErrorWindow
                text_messege={"Вы не авторизовались"}
                display_none={activeError}
            />
        </div>
    );
}

export default App;
