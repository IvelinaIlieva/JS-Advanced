function solve() {
  let generateButton = document.querySelectorAll("button")[0];
  let buyButton = document.querySelectorAll("button")[1];

  generateButton.addEventListener("click", generate);
  buyButton.addEventListener("click", buy)

  function generate() {
    let inputItems = JSON.parse(document.querySelectorAll("textarea")[0].value);
    let parentElement = document.querySelector("tbody");

    for (let item of inputItems) {
      let tr = document.createElement("tr");

      let imgTd = document.createElement("td");
      let img = document.createElement("img");
      img.setAttribute("src", item.img);
      imgTd.appendChild(img);
      tr.appendChild(imgTd);

      let nTd = createWithParagraph(item.name);
      tr.appendChild(nTd);

      let prTd = createWithParagraph(item.price)
      tr.appendChild(prTd);

      let dFTd = createWithParagraph(item.decFactor)
      tr.appendChild(dFTd);

      let chBTd = document.createElement("td");
      let input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      chBTd.appendChild(input);
      tr.appendChild(chBTd);

      parentElement.appendChild(tr);
    }

    function createWithParagraph(value) {
      let td = document.createElement("td");
      let p = document.createElement("p");
      p.textContent = value;
      td.appendChild(p);

      return td;
    }
  }

  function buy() {
    let checkboxes = document.querySelectorAll("input[type=checkbox]");
    let boughtItems = [];
    let decFactorAvg = 0;
    let totalPrice = 0;

    for (let checkbox of checkboxes) {
      if (checkbox.checked) {
        let productName = checkbox.parentElement.parentElement.getElementsByTagName("p")[0].textContent;
        let productPrice = Number(checkbox.parentElement.parentElement.getElementsByTagName("p")[1].textContent);
        decFactorAvg += Number(checkbox.parentElement.parentElement.getElementsByTagName("p")[2].textContent);
        boughtItems.push(productName);
        totalPrice += productPrice;
      }
    }
    decFactorAvg /= boughtItems.length;

    let text = `Bought furniture: ${boughtItems.join(", ")}\n`
      + `Total price: ${totalPrice.toFixed(2)}\n`
      + `Average decoration factor: ${decFactorAvg}`;

    document.querySelectorAll("textarea")[1].textContent = text;
  }
}