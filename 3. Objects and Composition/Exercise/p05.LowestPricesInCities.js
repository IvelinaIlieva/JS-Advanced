function lowestPricesInCities(data) {

    let productList = {};

    for (let item of data) {
        let [town, product, price] = item.split(' | ');
        price = Number(price);

        if (!productList.hasOwnProperty(product)) {
            productList[product] = { town, price };
        } else {
            if (productList[product].price > price) {
                productList[product] = { town, price };
            }
        }
    }

    for (let item of Object.entries(productList)) {
        let productName = item[0];
        let townName = item[1].town;
        let productLowestPrice = item[1].price;

        console.log(`${productName} -> ${productLowestPrice} (${townName})`);
    }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);

console.log('-------------------------');

lowestPricesInCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000']
);