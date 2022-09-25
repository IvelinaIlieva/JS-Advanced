function solve() {
  let textInput = document.getElementById('input').value;
  let textArray = textInput.split('.').filter(x => x.length > 0);
  let output = document.getElementById('output');
  let resultText = '';

  for (let i = 0; i < textArray.length; i++) {
    if (i % 3 === 0 && i) {
      output.innerHTML += `<p>${resultText}.</p>`;
      resultText = '';
    }
    resultText += textArray[i];
  }

  if (resultText.length > 0) {
    output.innerHTML += `<p>${resultText}.</p>`;
  }
}