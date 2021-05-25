'use strict';

let num = 50;

// 1 вариант (while)
while (num <= 55) {
    console.log(num);
    num++;
}

// 2 вариант (do while)
do {
    console.log(num);
    num++;
}
while (num <= 55);

// 3 вариант (for)
for (let i = 1; i < 10; i++) {
    if (i === 6){
        // break;
        continue; // 1, 2, 3, 4, 5, 7, 8, 9 // без 6, потому что пропускает
    }
    console.log(i);
}