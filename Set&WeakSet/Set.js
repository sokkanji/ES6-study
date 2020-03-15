let mySet = new Set();
// console.log(toString.call(mySet));

//set : 중복없이 유일한 값을 저장하려고 할 때, 이미 존재하는지 체크할 때 유용.

mySet.add("crong");
mySet.add("hary");
mySet.add("crong");
//중복된 값을 제외.

// console.log(mySet.has("crong"));
//Myset.has() -> 주어진 키를 가진 요소가 Myset에 존재하는지 boolean으로 반환.

mySet.delete("crong");

// mySet.forEach(function (v) {
//     console.log(v);
// })