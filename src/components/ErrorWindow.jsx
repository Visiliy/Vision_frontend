import "./ui_ux/ErrorWindow.model.css";

function ErrorWindow({text_messege, display_none}) {

    let text = "";
    if (display_none) {
        text = "display_none";
    }

    return (
        <div className={`ErrorWindow ${text}`}>
           {text_messege}
        </div>
    );
}

export default ErrorWindow;