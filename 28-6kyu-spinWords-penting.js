// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

// const spinWords = string => string.split(' ').map(e => (e.length >= 5) ? e.split('').reverse().join('') : e).join(' ');


const spinWords = string => string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') });

console.log(spinWords("You are almost to the last test"));
console.log(spinWords("Welcome"));