function addAndRemoveElements(commands) {
    let num = 1;
    let array = [];

    for (let command of commands) {
        if (command === 'add') {
            array.push(num);
        } else {
            array.pop();
        }
        num++;
    }

    array.length > 0
        ? array.forEach(x => console.log(x))
        : console.log('Empty');
}

addAndRemoveElements(['add',
    'add',
    'add',
    'add']
);

addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
);

addAndRemoveElements(['remove',
    'remove',
    'remove']
);