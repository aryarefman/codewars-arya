// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

// const isSquare = n => {
//    const sqrt = Math.sqrt(n);
//    return Number.isInteger(sqrt);
// }


// const isSquare = n => Number.isInteger(Math.sqrt(n));


const isSquare = n => Math.sqrt(n) % 1 === 0;

console.log(isSquare(26));