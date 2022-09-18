function sumOfNumbersFromNToM(n, m) {

    let num1 = Number(n);
    let num2 = Number(m);
    let sum = 0;

    for (let num = num1; num <= num2; num++) {
        sum += num;
    }

    console.log(sum);
}

sumOfNumbersFromNToM('1', '5');
sumOfNumbersFromNToM('-8', '20');