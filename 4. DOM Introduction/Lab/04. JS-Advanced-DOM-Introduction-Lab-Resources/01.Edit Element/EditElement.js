function editElement(reference, match, replacer) {
    let refText = reference.textContent;
    let regEx = new RegExp(match, 'g');
    let text = refText.replace(regEx, replacer);

    reference.textContent = text;
}