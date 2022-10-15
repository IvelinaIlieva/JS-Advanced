function encodeAndDecodeMessages() {

    let outputArea = document.querySelectorAll("textarea")[1];
    let encodeButton = document.querySelectorAll("button")[0];
    let decodeButton = document.querySelectorAll("button")[1];

    encodeButton.addEventListener("click", encode);
    decodeButton.addEventListener("click", decode);

    function encode() {
        let inputText = document.querySelectorAll("textarea")[0].value;
        let newText = "";
        for (let i = 0; i < inputText.length; i++) {
            let currentCharCode = inputText[i].charCodeAt();
            newText += String.fromCharCode(currentCharCode + 1);
        };

        document.querySelectorAll("textarea")[0].value = "";
        outputArea.value = newText;
    };

    function decode() {
        let inputText = outputArea.value;
        let newText = "";
        for (let i = 0; i < inputText.length; i++) {
            let currentCharCode = inputText[i].charCodeAt();
            newText += String.fromCharCode(currentCharCode - 1);
        };

        outputArea.value = newText;
    }
}