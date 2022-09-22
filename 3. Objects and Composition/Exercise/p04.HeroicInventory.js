function heroicInventory(data) {

    let register = [];
    let hero = {};

    for (let args of data) {
        let [name, level, items] = args.split(' / ');
        hero['name'] = name;
        hero['level'] = Number(level);
        hero['items'] = items ? items.split(', ') : [];
        register.push(hero);
        hero = {};
    }

    console.log(JSON.stringify(register));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1']
);

heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);