var name = "global var";

function home() {
    var homevar = "homevar";
    // for (var i = 0; i < 100; i++) {
    //     // console.log(i);
    // }

    if (true) {
        let myif = "my";
    }
    console.log(myif);
}

home();

// 스코프란?
// 참조 대상 식별자를 찾아내기 위한 규칙.
// js는 함수 레벨 스코프를 따른다.
// ES6에서부터 let를 사용하면 블록레벨 스코프 사용 가능하다.

// 함수 레벨 스코프란?
// 함수 밖에서 선언한 함수 스코프 변수는 전역 범위를 가지고,
// 함수 안에서 사용하면 함수 밖을 제외한 내부 어디서든 접근 가능.
// 단점 : 메모리 누수, 디버깅 어렵고, 가독성 떨어짐.

// 함수 레벨 스코프의 단점을 보완하고자 나온 키워드 -> let, const