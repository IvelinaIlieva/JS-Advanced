function addItem() {
    let newText = document.getElementById("newItemText").value;
    let newValue = document.getElementById("newItemValue").value;
    let menu = document.getElementById("menu");

    let newElement = document.createElement("option");
    newElement.textContent = newText;
    newElement.value = newValue;

    menu.appendChild(newElement);

    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";
}