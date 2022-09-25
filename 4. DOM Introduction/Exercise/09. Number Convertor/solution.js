function solve() {
    let toField = document.getElementById('selectMenuTo');
    let input = document.getElementById('input');
    let output = document.getElementById('result');

    let binaryOption = document.createElement('option');
    binaryOption.textContent = 'Binary';
    binaryOption.value = 'binary';
    toField.appendChild(binaryOption);

    let hexadecimalOption = document.createElement('option');
    hexadecimalOption.textContent = 'Hexadecimal';
    hexadecimalOption.value = 'hexadecimal';
    toField.appendChild(hexadecimalOption);

    document.querySelector('button').addEventListener('click', (x) => {
        let number = +input.value;
        if (toField.value === 'binary') {
            output.value = number.toString(2);
        } else if (toField.value === 'hexadecimal') {
            output.value = number.toString(16).toUpperCase();
        };
    });
}