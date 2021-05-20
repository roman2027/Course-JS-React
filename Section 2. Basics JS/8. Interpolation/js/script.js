'use strict';

const category = 'toys';

console.log('https://someurl.com/' + category + '/' + '4'); // конкатинация строк
console.log(`https://someurl.com/${category}/5`) // интерполяция

const user = 'Ivan';

alert(`Привет, ${user}`)