function solve() {
    let paragraph = document.getElementById("check").childNodes[1];
    let table = document.querySelector("table");

    let checkButton = document.getElementsByTagName("button")[0];
    let clearButton = document.getElementsByTagName("button")[1];

    checkButton.addEventListener("click", check);
    clearButton.addEventListener("click", clear);

    function check() {
        let firstRow = Array.from(document.querySelectorAll("tbody tr")[0].querySelectorAll("input")).map(n => n.value);
        let secondRow = Array.from(document.querySelectorAll("tbody tr")[1].querySelectorAll("input")).map(n => n.value);
        let thirdRow = Array.from(document.querySelectorAll("tbody tr")[2].querySelectorAll("input")).map(n => n.value);

        let firstCol = [];
        let secondCol = [];
        let thirdCol = [];

        firstCol.push(firstRow[0]);
        firstCol.push(secondRow[0]);
        firstCol.push(thirdRow[0]);

        secondCol.push(firstRow[1]);
        secondCol.push(secondRow[1]);
        secondCol.push(thirdRow[1]);

        thirdCol.push(firstRow[2]);
        thirdCol.push(secondRow[2]);
        thirdCol.push(thirdRow[2]);

        if (checkRoWCol(firstRow) && checkRoWCol(secondRow) && checkRoWCol(thirdRow)
            && checkRoWCol(firstCol) && checkRoWCol(secondCol) && checkRoWCol(thirdCol)) {

            paragraph.textContent = "You solve it! Congratulations!";
            paragraph.style.color = "green";
            table.style.border = "2px solid green";
        } else {
            paragraph.textContent = "NOP! You are not done yet...";
            paragraph.style.color = "red";
            table.style.border = "2px solid red";
        }

        function checkRoWCol(arr) {
            let arrToStr = arr.sort().join("");
            let pattern = "123";

            if (arrToStr !== pattern) {
                return false;
            }
            return true;
        };
    };

    function clear() {
        let inputs = Array.from(document.querySelectorAll("tbody td input"));

        inputs.forEach(i => i.value = "");

        table.style = 'none';
        paragraph.textContent = "";
    }
}