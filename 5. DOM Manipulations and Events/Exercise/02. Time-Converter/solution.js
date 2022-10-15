function attachEventsListeners() {
    let buttons = document.querySelectorAll('input[type=button]');

    for (let button of buttons) {
        button.addEventListener('click', convertAll)
    };

    function convertAll(event) {
        let currentButton = event.target.parentElement.querySelector('input[type=text]');
        let buttonValue = Number(currentButton.value);

        switch (currentButton.id) {
            case "days":
                value = buttonValue;
                convert(value);
                break;
            case "hours":
                value = buttonValue / 24;
                convert(value);
                break;
            case "minutes":
                value = buttonValue / 24 / 60;
                convert(value);
                break;
            case "seconds":
                value = buttonValue / 24 / 60 / 60;
                convert(value);
                break;
        };

        function convert(value) {
            let inputValues = Array.from(document.querySelectorAll('input[type=text]'));
            inputValues.shift().value = value;
            let currentValue = value * 24;
            for (let input of inputValues) {
                input.value = currentValue;
                currentValue *= 60;
            }
        };
    }
}