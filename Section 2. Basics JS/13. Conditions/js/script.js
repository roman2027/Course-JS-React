'use strict';

// условный оператор
const num = 50;
if(num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok');
}

// тернарный оператор
(num === 50) ? console.log('Ok!') : console.log('Error');

// switch
switch (num) {
    case 49: 
        console.log('Неверно!');
        break;
    case 100:
        console.log('Неверно!');
        break;
    case 50:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз!');
        break;
}