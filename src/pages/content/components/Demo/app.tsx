import {useEffect} from "react";
import {Readability} from "@mozilla/readability";


export default function App() {

    const downloadText = (selectedText) => {
        // Create a Blob object with the selected text
        const blob = new Blob([selectedText], {type: 'text/plain'});

        // Create a URL for the Blob object
        const url = URL.createObjectURL(blob);

        // Create a new 'a' element
        const a = document.createElement('a');

        // Set the href of the 'a' element to the URL of the Blob object
        a.href = url;

        // Set the download attribute of the 'a' element to the current webpage's title
        a.download = document.title + '.txt';

        // Append the 'a' element to the body
        document.body.appendChild(a);

        // Simulate a click on the 'a' element
        a.click();

        // Remove the 'a' element from the body
        document.body.removeChild(a);
    }

    function parsePageContent() {
        const docClone = document.cloneNode(true);
        const article = new Readability(docClone as Document).parse();
        return article.textContent;
    }

    useEffect(() => {
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            if (request.action === 'getSelection') {
                downloadText( window.getSelection().toString());
            }
            if (request.action === 'copyAll') {
                const content = parsePageContent();
                sendResponse(content);
            }
            if (request.action === 'downloadSimpleContent') {
                const content = parsePageContent();
                downloadText(content);
            }
        });
    }, []);

    return <div className="content-view">content view</div>;
}
