function generateReport() {
    let tableColumns = Array.from(document.querySelectorAll('thead input'));
    let tableInput = Array.from(document.querySelectorAll('tbody tr'));
    let output = document.getElementById('output');
    let sheet = [];

    for (let input of tableInput) {
        let employee = {};

        for (let i = 0; i < input.children.length; i++) {
            if (tableColumns[i].checked) {
                let prop = tableColumns[i].name;
                employee[prop] = input.children[i].textContent;
            }
        }

        sheet.push(employee);
    };
    output.textContent = JSON.stringify(sheet, null, 2);
}