function biggerHalf(array) {
    array.sort((a, b) => a - b);
    let startIndex = array.length % 2 === 0 ? array.length / 2 : Math.ceil(array.length / 2 - 1);
    let newArray = array.slice(startIndex, array.length);
    return newArray;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);