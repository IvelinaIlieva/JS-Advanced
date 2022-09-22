function extract(content) {
    let text = document.getElementById(content).textContent;
    let matcher = /\(([^)]+)\)/g;
    let result = [];

    result = text.matchAll(matcher);

    output = [];

    for (let match of result) {
        output.push(match[1]);
    }

    return output.join('; ');
}