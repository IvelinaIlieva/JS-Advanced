function negativePositiveNumbers(array) {
    let newArray = [];

    array.forEach(element =>
        element < 0 ? newArray.unshift(element) : newArray.push(element));

    newArray.forEach(element => console.log(element));
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);