function attachEventsListeners() {
    let button = document.getElementById("convert");

    let convertToMeterTable = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    button.addEventListener("click", convert);

    function convert() {
        let inputValue = Number(document.getElementById("inputDistance").value);
        let inputUnit = document.getElementById("inputUnits").value;
        let inputValueInMeters = inputValue * Number(convertToMeterTable[inputUnit]);

        let outputUnit = document.getElementById("outputUnits").value;
        let outputValue = inputValueInMeters / Number(convertToMeterTable[outputUnit]);
        document.getElementById("outputDistance").value = outputValue;
    }
}