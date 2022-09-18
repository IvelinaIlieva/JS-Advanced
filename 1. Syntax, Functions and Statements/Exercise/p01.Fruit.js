function fruit(typeOfFruit, weightInGr, pricePerKg) {
    let weight = weightInGr / 1000;
    let money = weight * pricePerKg;

    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${typeOfFruit}.`)
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);