function circleArea(arg) {
    let typeOfArg = typeof(arg);

    if(typeOfArg === 'number') {
        let result = Math.PI * Math.pow(Number(arg), 2);
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfArg}.`)
    } 
}

circleArea(5);
circleArea('name');