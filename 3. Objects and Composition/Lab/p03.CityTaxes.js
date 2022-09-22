function cityTaxes(name, population, treasury) {
    return {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            return this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            return this.population += this.population * percentage / 100;
        },
        applyRecession(percentage) {
            return this.treasury -= this.treasury * percentage / 100;
        }
    }
}

const city1 =
    cityTaxes('Tortuga',
        7000,
        15000);
console.log(city1);


const city =
    cityTaxes('Tortuga',
        7000,
        15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
