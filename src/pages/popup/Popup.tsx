import React from "react";
import "@pages/popup/Popup.css";

const Popup = () => {

    const handleClick = () => {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            console.log("test")
            chrome.tabs.sendMessage(tabs[0].id, {action: 'getSelection'}, function (response) {
                console.log(response);
            });
        });
    }

    const handleCopy = () => {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: 'copyAll'}, function (response) {
                console.log(response);
            });
        });
    }
    return (
        <div className="App">
            <header className="App-header">
                <button onClick={handleClick}>Download Selected Text</button>
                <button onClick={handleCopy}>Copy All Content</button>
            </header>
        </div>
    );
};

export default Popup;
