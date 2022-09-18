function lastKNumbersSequence(n, k) {

    let numbers = [1];

    for (let i = 1; i < n; i++) {
        numbers.push(getSumOfKElements(numbers, k));
    }

    return numbers;

    function getSumOfKElements(numbers, k) {
        k = numbers.length < k ? numbers.length : k;

        let currentSum = 0;
        for (let j = numbers.length; j > numbers.length - k; j--) {
            currentSum += numbers[j - 1];
        }

        return currentSum;
    }
}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);