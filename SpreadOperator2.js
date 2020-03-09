// let pre = [100, 200, "hello", null];
// let newData = [0, 1, 2, 3, ...pre, 4];
// console.log(newData);


//파라미터로 값 전달할 때,
function sum(a, b, c) {
    return a + b + c;
}

let pre = [100, 200, 300];

console.log(sum.apply(null, pre));
console.log("result=>", sum(...pre));