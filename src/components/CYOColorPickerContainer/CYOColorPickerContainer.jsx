import "./CYOColorPickerContainer.css";

export default function CYOColorPickerContainer () {

    return (
    <div className="CYOCP">
        <label for="colorpicker">Color Picker:</label>
        <input type="color" id="colorpicker" value="#0000ff"/>
    </div>
    )
}