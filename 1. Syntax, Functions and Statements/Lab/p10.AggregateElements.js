function aggregateElements(input) {

    operation(input, 0, (a, b) => a + b);
    operation(input, 0, (a, b) => a + 1 / b);
    operation(input, '', (a, b) => a + b);

    function operation(array, startValue, func) {
        let result = startValue;

        for (let i = 0; i < array.length; i++) {
            result = func(result, array[i]);
        }

        console.log(result);
    }
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);