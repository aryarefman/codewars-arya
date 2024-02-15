// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

// const countBits = num => {
//     const bit = num.toString(2)
//     return bit.split('').map(Number).reduce((prev ,curr) => prev + curr, 0);
// }


// const countBits = num => num.toString(2).split(0).join('').length;


const countBits = num => num.toString(2).match(/1/g).length;


// const countBits = num =>  num.toString(2).split('').map(Number).reduce((prev, curr) => prev + curr, 0);

console.log(countBits(4));
console.log(countBits(10));