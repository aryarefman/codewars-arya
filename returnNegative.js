// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

// function makeNegative(num) {
//     if (num >= 0) {
//         return num * -1;
//     } else {
//         return num;
//     }
// }


// const makeNegative = num => (num >= 0) ? num * -1 : num;


// const makeNegative = num => (num < 0) ? num : -num;


// function makeNegative(num) {
//     return -Math.abs(num);
// }


const makeNegative = num => -Math.abs(num);

console.log(makeNegative(9));
