function greatestCommonDivisor(num1, num2) {

    //let result;
    let min = Math.min(num1, num2);

    // for (let i = 1; i <= min; i++) {
    //     if (num1 % i === 0 && num2 % i === 0) {
    //         result = i;
    //     }
    // }
    // console.log(result);

    //Euclidean algorithm
    let max = Math.max(num1, num2);
    let remainder = max % min;
    while (remainder !== 0) {
        max = min;
        min = remainder;
        remainder = max % min;
    }

    console.log(min);
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);