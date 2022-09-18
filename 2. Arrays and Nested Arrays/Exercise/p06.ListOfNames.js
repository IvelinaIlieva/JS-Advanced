listOfNames = (arrayOfNames) =>
    arrayOfNames.sort((x, y) => x.localeCompare(y)).map((x, i) => `${i + 1}.${x}`).forEach(x => console.log(x));

listOfNames(["John", "Bob", "Christina", "Ema"]);