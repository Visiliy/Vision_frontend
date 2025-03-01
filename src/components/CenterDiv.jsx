import "./ui_ux/CenterDiv.model.css";

function CenterDiv({ openWindow1, openWindow2, active }) {
    let text = "";
    if (active) {
        text = "display_none";
    }

    return (
        <div className={`CenterDiv ${text}`}>
            <div className="card number1" onClick={openWindow1}>
                <img className="img" src="src/components/img/img1.jpg" />
            </div>
            <div className="card number2" onClick={openWindow2}>
                <img className="img" src="src/components/img/img2.jpg" />
            </div>
        </div>
    );
}

export default CenterDiv;
