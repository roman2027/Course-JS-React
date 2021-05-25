'use strict';

// toLowerCase() - toUpperCase()
const str = 'teSt';
const arr = [1, 2, 4];

console.log(str.length); // 4
console.log(arr.length); // 3

console.log(str.toUpperCase()); // TEST
console.log(str.toLowerCase()); // test
console.log(str); // teSt

// .indexOf()
const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit')); // 5 - слово fruit начинается после 5ти символов
console.log(fruit.indexOf('q')); // -1

// .slice()
const logg = 'Hello world';
console.log(logg.slice(6, 11)); // world
console.log(logg.slice(6)); // world
console.log(logg.slice(-5)); // world

// .substring() - не поддерживает отрицательные значения в отличии от .slice()
console.log(logg.substring(6, 11)); // world

// .substr() - второй аргумент можно указать, как длину вырезанного текста
console.log(logg.substr(6, 5)); // world

// Числа - Math.свойства или объекты
// Math.round()
const num = 12.2;
console.log(Math.round(num)); // 12

// parseInt() - переводит строку в числовой тип данных, округляя до целого числа
const test = '12.2px';
console.log(parseInt(test)); // 12

// parseFloat() - принимает строку в качестве аргумента и возвращает десятичное число
console.log(parseFloat(test)); // 12.2