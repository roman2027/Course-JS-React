'use strict';

/*
let a = 5,
    b = a;

b = b + 5;

console.log('let a = ' + a);
console.log('let b = ' + b);

const obj = {
    a: 5,
    b: 1
};

const copyO = obj; // передаёт ссылку на объект

copyO.a = 10;

console.log(copyO);
console.log(obj);


// рабоаем с поверхностными копиями
// способы для копирования объектов (клонирования)
// 1 способ
function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers); // создали копию объекта, то есть клонировали

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

// 2 способ - Object.assign()

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));

const clone = (Object.assign({}, add));

clone.d = 20;
console.log(add);
console.log(clone);

*/

// создаём копию массива
// 3 способ - .slice()
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'ffsdfaf';
console.log(newArray); // ["a", "ffsdfaf", "c"]
console.log(oldArray); // ["a", "b", "c"]

// 4 способ - оператор разворота (spread оператор)
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
console.log(newObj);