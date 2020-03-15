function addMark() {
    let newArray = Array.from(arguments);
    //arguments로부터 배열을 만든다. (얇은 복사)

    //배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.
    let newData = newArray.map(function (value) {
        return value + "!";
    });

    console.log(newData);
}

addMark(1, 2, 3, 4, 5, 6, 7, 8, 9);