function stringLength(word1, word2, word3) {
    let sum = word1.length + word2.length + word3.length;
    let average = Math.floor(sum / 3);

    console.log(sum);
    console.log(average);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');