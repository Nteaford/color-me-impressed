import './CYOColorModal.css';
import {useState} from 'react';

export default function CYOColorModal ({ hideModal, show}) {
    const showHideClassName = show ? "modal display-block" : "modal display-none";


    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="CYOCP">
                    <form action="/color/">
                        <label for="colorpicker">Select a color from this picker:</label>
                        <input type="color" id="colorpicker" value="#0000ff"/>
                    </form>
                </div>

            <button type="button" onClick={hideModal}>
                Close
            </button>
            </section>
        </div>
    );
}