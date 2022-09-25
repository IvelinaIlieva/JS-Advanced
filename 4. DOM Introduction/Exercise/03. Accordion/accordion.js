function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let display = document.getElementById('extra');

    if (button.textContent === 'More') {
        button.textContent = 'Less';
        display.style.display = 'block';

    } else {
        button.textContent = 'More';
        display.style.display = 'none';
    }
}