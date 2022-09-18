sortAnArrayBy2Criteria = (array) =>
    array.sort((x, y) => x.length - y.length || x.localeCompare(y)).forEach(x => console.log(x));

sortAnArrayBy2Criteria(['alpha',
    'beta',
    'gamma']
);

sortAnArrayBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);

sortAnArrayBy2Criteria(['test',
    'Deny',
    'omen',
    'Default']
);