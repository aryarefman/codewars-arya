// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

const accum = s => s.split('').map((e, i) => e.toUpperCase() + e.toLowerCase().repeat(i)).join('-');

console.log(accum('abcd'));