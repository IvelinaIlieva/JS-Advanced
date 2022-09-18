function squareOfStars(number) {

    if (number <= 0) {
        number = 5;
    }

    let rowStars = '* '.repeat(number);

    for (let rows = 0; rows < number; rows++) {
        console.log(rowStars);
    }
}

squareOfStars(1);
console.log('-------------------');
squareOfStars(2);
console.log('-------------------');
squareOfStars(5);
console.log('-------------------');
squareOfStars(7);