function previousDay(year, month, day) {

    let newDate = new Date(year, month - 1, day - 1);

    let newYear = newDate.getFullYear();
    let newMonth = newDate.getMonth() + 1;
    let newDay = newDate.getDate();

    console.log(`${newYear}-${newMonth}-${newDay}`);
}

previousDay(2016, 9, 30);
previousDay(2016, 10, 1);