var data = [1, 2, undefined, NaN, null, ""];

//1. for 반복문 
// for (var i = 0; i < data.length; i++) {
//     console.log(i);
// }

//2. foreach 반복문
// data.forEach(function (value) {
//     console.log(value);
// });

//3. for in 반복문, for in은 object 타입 순회할 때 주로 사용함. 
// Array.prototype.getIndex = function () { };
//for in의 문제점 : 자신이 가지고 있지 않은 상위의 값까지도 포함을 해서 결과를 나타낼 수 있음.
// for (let idx in data) {
//     console.log(data[idx]);
// }

//4. for of 반복문, for in의 단점을 보완하기 위해 새롭게 등장.
Array.prototype.getIndex = function () { };
for (let value in data) {
    console.log(value);
}