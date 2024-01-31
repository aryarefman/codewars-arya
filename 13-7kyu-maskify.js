// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

const maskify = cc => cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);

console.log(maskify('4556364607935616'));