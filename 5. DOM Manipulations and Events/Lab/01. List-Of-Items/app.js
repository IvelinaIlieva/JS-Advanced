function addItem() {
    let textToAdd = document.getElementById('newItemText').value;
    let li = document.createElement('li');
    li.textContent = textToAdd;
    document.getElementById('items').appendChild(li);
}