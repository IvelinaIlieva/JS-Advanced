function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let inputText = JSON.parse(document.querySelector('textarea').value);
      let outputBestRestaurant = document.querySelector('#bestRestaurant p');
      let outputWorkers = document.querySelector('#workers p');
      let restaurants = [];

      for (let info of inputText) {
         let [name, workers] = info.split(' - ');

         if (!restaurants.some(x => x.name === name)) {
            let restaurant = { name, bestSalary: 0, totalSalary: 0, averageSalary: 0, workers: [] };
            restaurants.push(restaurant);
         };

         let currentRestaurant = restaurants.find(x => x.name === name);
         if (workers === undefined) {
            continue;
         };

         for (let worker of workers.split(', ')) {
            let [workerName, salary] = worker.split(' ');
            salary = Number(salary);
            if (currentRestaurant.bestSalary < salary) {
               currentRestaurant.bestSalary = salary;
            }
            currentRestaurant.totalSalary += salary;
            currentRestaurant.workers.push({ workerName, salary });
         }

         currentRestaurant.averageSalary = currentRestaurant.totalSalary / currentRestaurant.workers.length;
      }

      restaurants.sort((x, y) => y.averageSalary - x.averageSalary);
      let bestRestaurant = restaurants[0];
      restaurants[0].workers.sort((x, y) => y.salary - x.salary);

      outputBestRestaurant.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

      let workersList = '';
      for (let worker of bestRestaurant.workers) {
         workersList += `Name: ${worker.workerName} With Salary: ${worker.salary} `;
      }
      outputWorkers.textContent = workersList;
   }
}