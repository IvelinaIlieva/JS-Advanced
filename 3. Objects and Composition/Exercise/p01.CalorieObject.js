function calorieObject(args) {
    let currentObj = {};

    for (let i = 0; i < args.length; i += 2) {
        let name = args[i];
        let calPer100Gr = Number(args[i + 1]);
        currentObj[name] = calPer100Gr;
    }

    console.log(currentObj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);