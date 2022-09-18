function validityChecker(x1, y1, x2, y2) {

    const checker = (a, b, c, d) =>
        Math.sqrt(Math.pow((c - a), 2) + Math.pow((d - b), 2));

    let firstCheck = checker(x1, y1, 0, 0);
    let secondCheck = checker(x2, y2, 0, 0);
    let thirdCheck = checker(x1, y1, x2, y2);

    console.log(Number.isInteger(firstCheck)
        ? `{${x1}, ${y1}} to {0, 0} is valid`
        : `{${x1}, ${y1}} to {0, 0} is invalid`);
    console.log(Number.isInteger(secondCheck)
        ? `{${x2}, ${y2}} to {0, 0} is valid`
        : `{${x2}, ${y2}} to {0, 0} is invalid`);
    console.log(Number.isInteger(thirdCheck)
        ? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`
        : `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);