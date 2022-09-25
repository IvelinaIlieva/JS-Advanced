function solve() {
  let textInput = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let text = textInput.split(' ');

  let result = '';

  switch (convention) {
    case 'Camel Case':
      text.forEach((word, index) => {
        if (index === 0) {
          result += word.toLowerCase();
        } else {
          word = word.toLowerCase();
          result += word.replace(word[0], word[0].toUpperCase());
        }
      });
      break;
    case 'Pascal Case':
      text.forEach(word => {
        word = word.toLowerCase();
        result += word.toLowerCase().replace(word[0], word[0].toUpperCase());
      });
      break;
    default: result = 'Error!';
  }

  document.getElementById('result').innerText = result;
}