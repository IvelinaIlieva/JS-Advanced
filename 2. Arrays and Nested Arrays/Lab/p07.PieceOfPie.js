function pieceOfPie(pieFlavours, targetFlavour1, targetFlavour2) {
    let startIndex = pieFlavours.indexOf(targetFlavour1);
    let endIndex = pieFlavours.indexOf(targetFlavour2) + 1;

    let newPieFlavours = pieFlavours.slice(startIndex, endIndex);

    return newPieFlavours;
}

console.log(pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));
console.log(pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
));