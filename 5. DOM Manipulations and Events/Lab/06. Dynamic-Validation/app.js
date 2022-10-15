function validate() {
    let emailField = document.getElementById('email');

    emailField.addEventListener("change", validateEmail);

    function validateEmail(event) {
        let input = emailField.value;
        let pattern = /\b[a-z]+@[a-z]+\.[a-z]+\b/g;

        if (!input.match(pattern)) {
            emailField.classList.add('error');
        } else {
            emailField.classList.remove('error');
        };
    }
}