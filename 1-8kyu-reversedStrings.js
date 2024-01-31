// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

// function solution(str){
//     return str.split('').reduce((acc, curr) => curr + acc, '');
// }


// function solution(str){
//     return str.split('').reverse().join('');
// }


const solution = str => str.split('').reduce((acc, curr) => curr + acc, '');

console.log(solution('arya'));