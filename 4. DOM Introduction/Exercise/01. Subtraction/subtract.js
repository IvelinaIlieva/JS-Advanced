function subtract() {
    let firstNum = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;

    let result = Number(firstNum) - Number(secondNumber);

    document.getElementById('result').textContent = result;
}