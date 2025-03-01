import "./ui_ux/Slogan.model.css";

function Slogan({ activeBtn, active }) {
    let text = "";
    if (!active) {
        text = "display_none";
    }

    return (
        <div className={`Slogan ${text}`}>
            <center>
                <h2 className="main_text">
                    Vision - твой помощник в визуализации информации
                </h2>
            </center>
            <center>
                <button onClick={activeBtn} className="main_btn">
                    Начать
                </button>
            </center>
        </div>
    );
}

export default Slogan;
