function storeCatalogue(data) {
    data.sort((a, b) => a.localeCompare(b));
    let sortedData = {};

    for (let item of data) {
        let currentSymbol = item[0];
        let productName = item.split(' : ')[0];
        let price = Number(item.split(' : ')[1]);

        if (!sortedData.hasOwnProperty(currentSymbol)) {
            sortedData[currentSymbol] = [];
        }

        sortedData[currentSymbol].push({ productName, price });
    }

    for (let [letter, products] of Object.entries(sortedData)) {
        console.log(letter);
        for (let product of products) {
            console.log(`  ${product.productName}: ${product.price}`);
        }
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);

console.log('---------------------');

storeCatalogue(['Banana : 2',
    "Rubic's Cube : 5",
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
);