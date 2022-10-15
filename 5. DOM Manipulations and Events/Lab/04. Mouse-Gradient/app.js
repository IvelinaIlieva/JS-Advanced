function attachGradientEvents() {
    let gradient = document.getElementById("gradient");
    gradient.addEventListener('mousemove', holdMouse);
    gradient.addEventListener('mouseout', outMouse);

    function holdMouse(event) {
        let hold = event.offsetX / (event.target.clientWidth);
        hold = Math.trunc(hold * 100);
        document.getElementById('result').textContent = hold + '%';
    };

    function outMouse(event) {
        document.getElementById('result').textContent = "";
    }
}