import "./ui_ux/MessageWindow.model.css";

function MessageWindow({ messeg, display_none, activeProcess }) {
    let text = "";

    if (!display_none) {
        text = "display_none";
    }

    return (
        <div className={`MessageWindow ${text}`}>
            <center>{messeg}</center>
            <center>
                <button className="begin_btn" onClick={activeProcess}>
                    Приступить
                </button>
            </center>
        </div>
    );
}

export default MessageWindow;
