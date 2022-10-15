function deleteByEmail() {
    let mailToDel = document.querySelector('input[name=email]').value;
    let mails = Array.from(document.querySelectorAll('tbody tr td:nth-child(2)'));
    let resultField = document.getElementById('result');
    let stringMails = mails.map(x => x.textContent);

    if (!stringMails.some(x => x === mailToDel)) {
        resultField.textContent = 'Not found.';
        return;
    }

    for (let mail of mails) {
        if (mail.textContent === mailToDel) {
            let row = mail.parentElement;
            row.parentElement.removeChild(row);
            resultField.textContent = 'Deleted.';
        }
    }
}