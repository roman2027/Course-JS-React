'use strict';

// в строгом режиме такая неправильная конструкция не работает, как внизу
// a = 15;
// console.log(a);

let number = 5; //изменяемая переменная
const leftBorderWidth = 1; //CamelCase //неизменяемая переменная
number = 101;
console.log(number);


const obj = {
    a: 50
};
obj.a = 10;
console.log(obj);
//прямых констант в JS не бывает

console.log(name);
var name = 'Ivan'; //хостинг или всплытие переменных

// Так не работает (объявление через let)
// {
//  let result = 50;
// }
// console.log(result);

// Так работает (объявление через var)
{
    var result = 50;
}
console.log(result);