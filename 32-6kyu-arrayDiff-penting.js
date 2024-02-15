// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

const arrayDiff = (a, b) => a.filter(e => !b.includes(e));

console.log(arrayDiff([1,2,2,2,3],[2]));