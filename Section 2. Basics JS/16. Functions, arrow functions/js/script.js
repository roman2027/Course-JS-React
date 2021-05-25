// замыкания, функции изнутри - https://learn.javascript.ru/closures
// https://medium.com/nuances-of-programming/%D1%8F-%D0%BD%D0%B8%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0-%D0%BD%D0%B5-%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%BB-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%87%D0%B0%D1%81%D1%82%D1%8C-%D0%BF%D0%B5%D1%80%D0%B2%D0%B0%D1%8F-3c3f02041970
// Замыкание функции - это сама функция вместе со всеми внешними переменными, которые ей доступны;
'use strict';

function newFunction(){};
newFunction = () => {};
 
let num = 20;
function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}
showFirstMessage('Hello, world!');
console.log(num);


// function declaration
console.log(calc(100, 250));
function calc(a, b) {
    return (a + b);
}
console.log(calc(20, 35));
console.log(calc(5, 6));
console.log(calc(10, 15));


function ret() {
    let num = 50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);


// function expression
const logger = function() {
    console.log('Hello!');
};
logger();


// стрелочная функция
const calc = (a, b) => a + b; 

const calc2 = (a, b) => {
    console.log('1');
    return a + b;
}