import React from "react";
import "@pages/popup/Popup.css";

const Popup = () => {

    const handleClick = () => {
        console.log("handleClick")
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            console.log("test",tabs)
            chrome.tabs.sendMessage(tabs[0].id, {action: 'getSelection'}, function (response) {
                console.log(response);

            });
        });
    }

    const handleCopy = () => {

        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: 'copyAll'}, function (response) {
                const p = document.createElement("p");
                p.innerHTML = response;
                p.style.display = "hidden";
                navigator.clipboard.writeText(p.innerHTML);
            });
        });
    }

    const handleDownloadSimpleContent = () => {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: 'downloadSimpleContent'}, function (response) {
                console.log("response", response);
            });
        });
    }
    return (
        <div className="App">
            <header className="App-header">
                <button onClick={handleClick}>
                    <svg   className="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="4039" width="26" height="26">
                        <path
                            d="M307.2 409.6h153.6v307.2h102.4V409.6h153.6v-102.4H307.2zM76.8 460.8h102.4v102.4H76.8zM844.8 460.8h102.4v102.4h-102.4z"
                            fill="#ffffff" p-id="4040"></path>
                        <path
                            d="M102.4 102.4v307.2h51.2V153.6h716.8v256h51.2V102.4zM870.4 870.4H153.6V614.4H102.4v307.2h819.2V614.4h-51.2z"
                            fill="#ffffff" p-id="4041"></path>
                    </svg>

                    Download Selected Text</button>
                <button onClick={handleCopy}>
                    <svg   className="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="5061" width="26" height="26">
                        <path
                            d="M725.333333 341.333333h128v512H341.333333v-128H213.333333V213.333333h512v128z m0 42.666667v341.333333H384v85.333334h426.666667V384h-85.333334zM256 256v426.666667h426.666667V256H256z"
                            fill="#ffffff" p-id="5062"></path>
                    </svg>

                    Copy All Content</button>
                <button onClick={handleDownloadSimpleContent}>
                    <svg   className="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="5573" width="26" height="26">
                        <path
                            fill="#ffffff"
                            d="M899.766023 449.176163v387.199622c0 30.566156-24.300452 54.867632-54.867632 54.867632H278.209838c7.834432-16.461927 13.3214-36.056194 13.3214-54.867632V117.625978H899.766023v331.550185zM236.667699 836.376809c0 30.566156-25.082258 54.867632-55.651484 54.867631-30.567179 0-54.867632-24.301476-54.867632-54.867631V504.043794h110.519116v332.333015z m0-774.399246v387.1986H70.499146v387.199622c0 60.352553 50.163493 110.515023 110.517069 110.515023h663.883199c60.35153 0 110.515023-50.16247 110.515023-110.515023V61.977563H236.667699z"
                            p-id="5574"></path>
                        <path
                            fill="#ffffff"
                            d="M365.7588 799.261493h442.889992v-56.181557H365.7588v56.181557z m0-112.28125h442.889992v-56.18258H365.7588v56.18258z m0-113.079428h442.889992v-56.18258H365.7588v56.18258z m55.714929-196.33869h331.913458V265.280876H421.473729V377.562125z m-55.714929 56.541761h442.556394V208.742185H365.7588v225.361701z"
                            p-id="5575"></path>
                    </svg>

                    Download All Content</button>
            </header>
        </div>
    );
};

export default Popup;
