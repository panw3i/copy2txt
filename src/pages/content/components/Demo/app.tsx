import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    console.log("content view loaded");
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === 'getSelection') {
        // Get the current selection
        const selectedText = window.getSelection().toString();
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
    });
  }, []);

  return <div className="content-view">content view</div>;
}
