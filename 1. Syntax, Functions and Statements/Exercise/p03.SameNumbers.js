function sameNumbers(number) {

    let numberToString = number.toString();
    let sum = Number(numberToString[0]);
    let areEqual = true;

    for (let i = 1; i < numberToString.length; i++) {
        if (numberToString[0] !== numberToString[i]) {
            areEqual = false;
        }

        sum += Number(numberToString[i]);
    }

    console.log(areEqual);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1221);