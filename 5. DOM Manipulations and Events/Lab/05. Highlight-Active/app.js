function focused() {
    let items = document.querySelectorAll('input');

    for (let item of items) {
        item.addEventListener('focus', (e) => {
            e.target.parentNode.classList.add('focused');
        });
        item.addEventListener('blur', (e) => {
            e.target.parentNode.classList.remove('focused');
        });
    };
}