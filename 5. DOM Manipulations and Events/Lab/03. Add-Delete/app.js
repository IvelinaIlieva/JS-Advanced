function addItem() {
    let textToAdd = document.getElementById('newItemText').value;
    let li = document.createElement('li');
    li.textContent = textToAdd;
    document.getElementById('items').appendChild(li);

    let itemToRemove = document.createElement("a");
    let delText = document.createTextNode("[Delete]");

    itemToRemove.appendChild(delText);
    itemToRemove.href = "#";
    itemToRemove.addEventListener("click", deleteItem);

    li.appendChild(itemToRemove);
    document.getElementById('items').appendChild(li);

    function deleteItem() {
        li.remove();
    }
}