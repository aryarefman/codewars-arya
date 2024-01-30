// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

const sumTwoSmallestNumbers = numbers => numbers.sort((a, b) => a - b).slice(0, 2).reduce((prev, curr) => prev + curr, 0);

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));