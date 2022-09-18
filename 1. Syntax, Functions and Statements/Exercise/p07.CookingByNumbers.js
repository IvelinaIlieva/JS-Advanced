function cookingByNumbers(num, ...operators) {

    let number = Number(num);

    for (let i = 0; i < operators.length; i++) {
        number = operation(operators[i], number);

        console.log(number);
    }

    function operation(operator, number) {
        switch (operator) {
            case 'chop': return number / 2;
            case 'dice': return Math.sqrt(number);
            case 'spice': return number + 1;
            case 'bake': return number * 3;
            case 'fillet': return number * 0.8;
        }
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');