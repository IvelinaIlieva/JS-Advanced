function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchedText = document.getElementById('searchField').value;
      let tableItems = Array.from(document.querySelectorAll('tbody tr'));

      tableItems.forEach(x => x.classList.remove('select'));

      for (let row of tableItems) {
         if (row.textContent.includes(searchedText)) {
            row.classList.add('select');
         }
      };
   }
}
