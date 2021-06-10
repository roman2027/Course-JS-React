'use strict';
// https://learn.javascript.ru/css-selectors
// https://habr.com/ru/post/336136/

const box = document.getElementById('box');
console.log(box); // <div class='box' id='box'></div>

// const btns = document.getElementsByTagName('button')[1];
const btns = document.getElementsByTagName('button');
console.log(btns[1]); // <button>2</button>

const circles = document.getElementsByClassName('circle');
console.log(circles); // [div.circle, div.circle, div.circle]

const hearts = document.querySelectorAll('.heart');
console.log(hearts);

hearts.forEach(item => {
    console.log(item);
}); // 3 * <div class='heart'></div>

const oneHeart = document.querySelector('.heart');
console.log(oneHeart); // <div class='heart'></div>