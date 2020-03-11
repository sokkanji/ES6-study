function print() {
    /* filter, includes, from을 이용해서 문자열 'e'가 노드로
    구성된 배열을 만들어서 반환하기 */
    let list = document.querySelectorAll("li");
    let listArray = Array.from(list);
    let eArray = listArray.filter(function (value) {
        return value.innerText.includes("e");
    });

    console.log(eArray.length);
}

print();