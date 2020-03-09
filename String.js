let str = "hello world!";
let matchstr = "hello";

console.log(str.startsWith(matchstr)); //어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 boolean 타입으로 반환
console.log(str.endsWith(matchstr)); // .. 끝나는지 ..
console.log(str.includes("!")); // .. 포함하는지 ..