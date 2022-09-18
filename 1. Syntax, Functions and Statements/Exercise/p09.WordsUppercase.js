function wordsUppercase(text) {

    let words = text.match(/\w+/g);
    let uppers = [];
    words.forEach(element => {
        uppers.push(element.toUpperCase())
    });

    console.log(uppers.join(', '));
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');