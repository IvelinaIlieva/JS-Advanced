function townsToJSON(data) {

    let result = [];
    let regEx = new RegExp(/\s*\|\s*/);

    for (let i = 1; i < data.length; i++) {
        let row = data[i].split(regEx).filter(x => x);

        let currentTown = row[0];
        let currentLatitude = +Number(row[1]).toFixed(2);
        let currentLongitude = +Number(row[2]).toFixed(2);

        result.push({ Town: currentTown, Latitude: currentLatitude, Longitude: currentLongitude });
    };

    console.log(JSON.stringify(result));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);

console.log('---------------');

townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
);