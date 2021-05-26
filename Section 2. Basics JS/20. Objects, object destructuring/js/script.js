// https://learn.javascript.ru/destructuring#destrukturizatsiya-obekta
// https://javascript.ru/tutorial/object/intro
// https://learn.javascript.ru/descriptors-getters-setters
// https://learn.javascript.ru/object-for-in

'use strict';

// const obj = new Object();
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();

console.log(options.name); // test
console.log(options['colors']['border']); // black
console.log(options.colors.border); // black


// delete - оператор, который нам поможет что-то удалить
delete options.name;

console.log(options);


// for in - конструкция, которая помогает нам перебрать все свойства объекта

let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        } 
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);

// let counter = 0;
// for (let key in options) {
//     counter++;
// }
// console.log(counter); // 3 (свойства)


// Object.keys() - преображает объект в массив
console.log(Object.keys(options)); // [width, height, colors]
console.log(Object.keys(options).length); // 3
console.log(Object.keys(options.colors).length); // 2


// Деструктуризация объектов
const {border, bg} = options.colors;
console.log(border);