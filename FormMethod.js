function addMark() {
    let newArray = Array.from(arguments);
    //arguments로부터 배열을 만든다.
    let newData = arguments.map(function (value) {
        return value + "!";
    });

    console.log(newData);
}

addMark(1, 2, 3, 4, 5, 6, 7, 8, 9);
