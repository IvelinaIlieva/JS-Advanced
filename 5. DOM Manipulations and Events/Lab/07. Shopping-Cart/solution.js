function solve() {
   let addButtons = document.querySelectorAll("button[class = add-product]");
   let textArea = document.getElementsByTagName('textarea')[0];
   let checkOutButton = document.getElementsByClassName("checkout")[0];
   let setOfProducts = new Set();

   let totalPrice = 0;

   for (let button of addButtons) {
      button.addEventListener('click', addProduct);
   };

   function addProduct(event) {
      let product = event.target.parentElement.parentElement.getElementsByClassName("product-title")[0].textContent;
      let price = Number(event.target.parentElement.parentElement.getElementsByClassName("product-line-price")[0].textContent);

      textArea.textContent += `Added ${product} for ${price.toFixed(2)} to the cart.\n`;

      totalPrice += price;
      setOfProducts.add(product);
   };

   checkOutButton.addEventListener('click', checkOut);

   function checkOut(event) {
      setOfProducts = Array.from(setOfProducts);
      textArea.textContent += `You bought ${setOfProducts.join(", ")} for ${totalPrice.toFixed(2)}.`;

      event.target.disabled = true;
      for (let button of addButtons) {
         button.disabled = true;
      }
   };
}