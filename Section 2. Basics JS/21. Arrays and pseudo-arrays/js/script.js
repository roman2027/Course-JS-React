// http://algolist.ru/sort/quick_sort.php
// http://coldfox.ru/article/5c7ffe64bbf20e61c12c7348/%D0%9E%D1%82%D0%BB%D0%B8%D1%87%D0%B8%D0%B5-for-of-%D0%BE%D1%82-for-in-%D0%B2-javascript
'use strict';

// Массив - это структура, которая содержит элементы по порядку
const arr = [1, 2, 3, 6, 8];
console.log(arr.length);


// .pop() - удаляет последний элемент массива
arr.pop()
console.log(arr);


// .push() - добавляет в конце массива элемент
arr.push(10);
console.log(arr);


// цикл для перебора массива
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


// метод for of для перебора массива
for (let value of arr) {
    console.log(value);
}


// forEach() - метод, который нам позволяет перебрать элементы массива удобнее всего
arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`)
})


// split() - превращает строку в массив
// join() - превращает массив в строку
const str = 'milk, mango, orange, strawberry, banana';
const products = str.split(', ');
console.log(products); // ["milk", "mango", "orange", "strawberry", "banana"]
console.log(products.join('; ')); // milk; mango; orange; strawberry; banana


// sort(fn) - метод для сортировки массива
const array = [12, 2, 33, 6, 8];
array.sort(function(a, b) {
    return a - b;
});
console.log(array); // [2, 6, 8, 12, 33]