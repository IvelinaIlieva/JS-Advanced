function lockedProfile() {
    let showButtons = document.querySelectorAll("button");

    for (let button of showButtons) {
        button.addEventListener('click', showInfo);
    }

    function showInfo(event) {
        let radioButtonLock = event.target.parentElement.querySelector("input[value = lock]");
        let hiddenField = event.target.parentElement.getElementsByTagName("div")[0];

        if (!radioButtonLock.checked) {
            if (event.target.textContent === "Show more") {
                hiddenField.style.display = 'block';
                event.target.textContent = 'Hide it';
            } else {
                hiddenField.style.display = 'none';
                event.target.textContent = 'Show more';
            };
        }
    }
}