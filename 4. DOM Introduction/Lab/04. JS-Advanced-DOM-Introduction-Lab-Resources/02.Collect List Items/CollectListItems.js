function extractText() {
    let listItems = document.querySelectorAll('ul li');
    let textArea = document.querySelector('#result');

    for (let item of listItems) {
        textArea.value += item.textContent + '\n';
    }
}