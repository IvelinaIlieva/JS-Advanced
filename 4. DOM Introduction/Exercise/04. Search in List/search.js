function search() {
   let list = Array.from(document.querySelectorAll('#towns li'));
   let searchedText = document.getElementById('searchText').value;
   let counter = 0;

   for (let item of list) {
      let currentItem = item.textContent.trim();

      if (currentItem.includes(searchedText)) {
         item.style.textDecoration = 'underline';
         item.style.fontWeight = 'bold';
         counter++;
      } else {
         item.style.textDecoration = 'none';
         item.style.fontWeight = 'normal';
      }
   };

   document.getElementById('result').textContent = `${counter} matches found`;
}
