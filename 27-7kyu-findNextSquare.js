// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

// const findNextSquare = sq => (Math.sqrt(sq) % 1 === 0) ? ((Math.sqrt(sq) + 1) * (Math.sqrt(sq)+ 1)) : -1;


const findNextSquare = sq => (Math.sqrt(sq) % 1 === 0) ? (Math.pow(Math.sqrt(sq) + 1, 2)) : -1;

console.log(findNextSquare(625));