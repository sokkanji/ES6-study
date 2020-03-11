var list = document.querySelectorAll("li");

for (var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function () {
        console.log(i + "번째 리스트 입니다.");
    })
}

// 클로저(closure)란?
// 내부함수가 외부함수의 지역변수에 접근할 수 있고,
// 외부함는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸 되지 않는 특성을 의미함.
// -> 외부 함수의 변수에 접근할 수 있는 내부 함수.