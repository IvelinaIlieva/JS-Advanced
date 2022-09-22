function createSortedList() {

    let list = [];

    let result = {
        add,
        remove,
        get,
        size: 0
    };

    return result;

    function add(number) {
        list.push(number);
        list.sort((a, b) => a - b);
        this.size++;
        return list;
    };

    function remove(index) {
        if (index >= 0 && index < list.length) {
            list.splice(index, 1);
            this.size--;
            return list;
        }
    };

    function get(index) {
        if (index >= 0 && index < list.length) {
            return list[index];
        }
    };
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(5));
