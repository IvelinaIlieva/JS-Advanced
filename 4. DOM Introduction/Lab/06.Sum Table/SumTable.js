function sumTable() {
    let products = document.querySelectorAll('table tr');
    let sum = 0;

    for (i = 1; i < products.length - 1; i++) {
        let cols = products[i].children;
        let price = cols[cols.length - 1].textContent;
        sum += Number(price);
    }

    document.getElementById('sum').textContent = sum;
}