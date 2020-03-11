function home() {
    const homename = [1, 2, 3, 4];
    // homename = ["1", "2"];
    console.log(homename);
}
home();

// var(function level), 재선언과 재할당 가능
// let(block level), 재할당 가능
// const(block level), 재선언과 재할당 불가능, 선언과 동시에 할당.

// hoisting 이란?
// 함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언하는 것.
// 막기 위해서 'use strict' 사용

// const는 기본으로 사용한다.
// 하지만, 변경이 될 수 있는 변수는 let을 사용한다.
// var는 사용하지 말 것.