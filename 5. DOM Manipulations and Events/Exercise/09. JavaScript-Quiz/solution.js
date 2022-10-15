function solve() {
  let sections = document.getElementsByTagName("section");
  let result = document.getElementsByClassName("results-inner")[0].querySelector("h1");
  let rightAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
  let correctAnswers = 0;

  for (let i = 0; i < sections.length; i++) {
    let answersBySection = sections[i].getElementsByClassName("answer-text");
    for (let answer of answersBySection) {
      answer.addEventListener("click", answerCheck);
    };

    function answerCheck(event) {
      if (rightAnswers.includes(event.target.textContent)) {
        correctAnswers++;
      };

      if (i < sections.length - 1) {
        sections[i].style.display = 'none';
        sections[i + 1].style.display = 'block';
      };

      if (i === sections.length - 1) {
        sections[i].style.display = 'none';
        correctAnswers === rightAnswers.length
          ? result.textContent = "You are recognized as top JavaScript fan!"
          : result.textContent = `You have ${correctAnswers} right answers`;

        result.parentNode.parentNode.style.display = 'block';
      }
    }
  }
}
