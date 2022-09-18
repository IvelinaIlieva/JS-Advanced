function sortingNumbers(arrayOfNumbers) {
    let smallToBig = arrayOfNumbers.slice().sort((x, y) => x - y);
    let newArray = [];

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (i % 2 == 0) {
            newArray[i] = smallToBig.shift();
        } else {
            newArray[i] = smallToBig.pop();
        }
    }

    return newArray;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));