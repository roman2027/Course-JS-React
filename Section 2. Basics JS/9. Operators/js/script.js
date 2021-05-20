'use strict';

console.log('arr' + ' - object');
console.log(4 + ' - object');
console.log(4 + +'5'); // плюс перед 5 называется унарным оператором

// Постфиксная форма
let incr = 10,
    decr = 10;

incr++; // оператор инкремента - увеличивает значение на 1
decr--; // оператор декремента - уменьшает значение на 1

console.log(incr++); // 11
console.log(decr--); // 9

// Префиксная форма
let increm = 10,
    decrem = 10;

++increm;
--decrem;

console.log(++increm); // 12
console.log(--decrem); // 8

console.log(5 % 2); // получаем остаток 1

console.log(2 * 4 == '8'); // true
console.log(2 * 4 === '8'); // false

// && - оператор И
// || - оператор ИЛИ

const isCheked = true,
      isClose = false;

console.log(isCheked && isClose); // false
console.log(isCheked || isClose); // true

// ! - оператор отрицания

// Приоритет операторов:
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

// Побитовые операторы
// https://learn.javascript.ru/bitwise-operators