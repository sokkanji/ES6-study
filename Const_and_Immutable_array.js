function home() {
    const list = ["apple", "orange", "watermelon"];
    list.push("banana");
    console.log(list);
}
//immutable array(불변의 배열)를 어떻게 만들지?
const list = ["apple", "orange", "watermelon"];
list2 = [].concat(list, "banana");
console.log(list, list2);

