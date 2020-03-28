// map & WeakMap
// weak맵은 객체를 저장함.
// Array을 자료구조 개선한 것이 set, weakset
// Object를 개선한 것이 map, weakset

// map은 key/value 구조로 이루어짐.
// key 값에 객체 저장함.

let wm = new WeakMap();
let myfun = function () { };
// 이 함수가 얼마나 실행됐지?를 알려고 할 때.

wm.set(myfun, 0);

console.log(wm);

let count = 0;
for (let i = 0; i < 10; i++) {
    count = wm.get(myfun); //get value
    count++;

    wm.set(myfun, count);
}

console.log(wm.get(myfun));

myfun = null;
console.log(wm.has(myfun));